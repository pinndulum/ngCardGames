import { ChangeDetectorRef, Component, inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { seededShuffle } from '../../../../utils/seeded-shuffle';

interface DieConfig {
  sides: number;
  label: string;
  amount: number;
  max: number;
}

interface DicePreset {
  name: string;
  dice: Record<number, number>;
}

interface DieRoll {
  id: number;
  sides: number;
  value: number;
  locked: boolean;
  rolling: boolean;
  rollCount: number;
  rollStep: number;
}

interface DieFace {
  id: string;
  value: number;
}

interface RollHistoryDie {
  id: number;
  label: string;
  value: number;
}

interface RollHistory {
  id: number;
  rolledAt: string;
  timeLabel: string;
  total: number;
  dice: RollHistoryDie[];
}

type DeviceMotionPermissionState = 'granted' | 'denied' | 'prompt';
type DeviceMotionEventConstructor = typeof DeviceMotionEvent & {
  requestPermission?: () => Promise<DeviceMotionPermissionState>;
};

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  imports: [MatSlideToggleModule]
})
export class DiceComponent implements OnDestroy, OnInit {
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);

  public readonly dice: DieConfig[] = [
    { sides: 2, label: 'd2', amount: 0, max: 12 },
    { sides: 3, label: 'd3', amount: 0, max: 12 },
    { sides: 4, label: 'd4', amount: 0, max: 12 },
    { sides: 6, label: 'd6', amount: 1, max: 12 },
    { sides: 8, label: 'd8', amount: 0, max: 12 },
    { sides: 10, label: 'd10', amount: 0, max: 12 },
    { sides: 12, label: 'd12', amount: 0, max: 12 },
    { sides: 20, label: 'd20', amount: 0, max: 12 },
    { sides: 30, label: 'd30', amount: 0, max: 12 },
    { sides: 100, label: 'd100', amount: 0, max: 12 }
  ];
  public readonly presets: DicePreset[] = [
    { name: 'One d6', dice: { 6: 1 } },
    { name: 'Craps', dice: { 6: 2 } },
    { name: 'D&D Kit', dice: { 4: 1, 6: 1, 8: 1, 10: 1, 12: 1, 20: 1, 100: 1 } },
    { name: 'Percentile', dice: { 100: 1 } },
    { name: 'Yahtzee', dice: { 6: 5 } }
  ];
  public readonly pipSlots = [1, 2, 3, 4, 5, 6, 7];
  public rolls: DieRoll[] = [];
  public history: RollHistory[] = [];
  public shakeEnabled = false;
  public lastRollSource = 'Ready';

  private activeRollSource = 'Rolled';
  private nextHistoryId = 0;
  private nextRollId = 0;
  private lastShakeAt = 0;
  private rollInProgress = false;
  private readonly rollTimers = new Map<number, number>();
  private readonly rollFrameMs = 85;
  private readonly minRollFrames = 9;
  private readonly maxRollFrames = 18;
  private readonly shakeThreshold = 30;
  private readonly shakeCooldownMs = 900;
  private readonly historyTimeFormatter = new Intl.DateTimeFormat(undefined, {
    timeStyle: 'medium'
  });
  private readonly pipsByValue = new Map<number, readonly number[]>([
    [1, [4]],
    [2, [1, 7]],
    [3, [1, 4, 7]],
    [4, [1, 2, 6, 7]],
    [5, [1, 2, 4, 6, 7]],
    [6, [1, 2, 3, 5, 6, 7]]
  ]);

  ngOnInit(): void {
    this.applyDiceCode(this.route.snapshot.queryParamMap.get('dice') ?? undefined);
  }

  ngOnDestroy(): void {
    this.cancelRollingDice();
    this.disableShake();
  }

  public get totalDice(): number {
    return this.dice.reduce((total, die) => total + die.amount, 0);
  }

  public get totalValue(): number {
    return this.rolls.reduce((total, die) => total + die.value, 0);
  }

  public get canRoll(): boolean {
    return this.totalDice > 0 && !this.isRolling && !this.allCurrentRollsLocked;
  }

  public get lockedCount(): number {
    return this.rolls.filter(roll => roll.locked).length;
  }

  public get rollingCount(): number {
    return this.rolls.filter(roll => roll.rolling).length;
  }

  public get isRolling(): boolean {
    return this.rollingCount > 0;
  }

  public get canLockRolls(): boolean {
    return !this.isRolling && this.totalDice > 1 && this.rolls.length > 1;
  }

  public get allCurrentRollsLocked(): boolean {
    return this.rolls.length > 0 && this.rollsMatchSelection() && this.lockedCount === this.rolls.length;
  }

  public incrementDie = (sides: number, delta: number): void => {
    const die = this.findDie(sides);
    if (!die) {
      return;
    }
    this.setAmount(sides, die.amount + delta);
  };

  public setAmount = (sides: number, amount: string | number): void => {
    this.cancelRollingDice();
    const die = this.findDie(sides);
    if (!die) {
      return;
    }
    const parsed = Number(amount);
    die.amount = Number.isFinite(parsed) ? Math.min(Math.max(Math.trunc(parsed), 0), die.max) : 0;
    this.syncLocksForSelection();
    this.updateDiceQueryParam();
  };

  public applyPreset = (preset: DicePreset): void => {
    this.cancelRollingDice();
    this.dice.forEach(die => {
      die.amount = preset.dice[die.sides] ?? 0;
    });
    this.syncLocksForSelection();
    this.lastRollSource = preset.name;
    this.updateDiceQueryParam();
  };

  public resetDiceSelection = (): void => {
    this.cancelRollingDice();
    this.dice.forEach(die => {
      die.amount = die.sides === 6 ? 1 : 0;
    });
    this.setRolls([]);
    this.lastRollSource = 'Reset';
    this.updateDiceQueryParam();
  };

  public rollDice = (source = 'Rolled'): void => {
    if (!this.canRoll) {
      return;
    }
    const rolls: DieRoll[] = [];
    const lockedBySide = this.lockedRollsBySide();
    let dieIndex = 0;
    this.dice.forEach(die => {
      for (let ndx = 0; ndx < die.amount; ndx++) {
        const lockedRoll = lockedBySide.get(die.sides)?.shift();
        if (lockedRoll) {
          rolls.push({
            ...lockedRoll,
            rolling: false,
            rollCount: 0,
            rollStep: 0
          });
          dieIndex++;
          continue;
        }
        rolls.push({
          id: this.nextRollId++,
          sides: die.sides,
          value: this.randomRollValue(die.sides, dieIndex),
          locked: false,
          rolling: true,
          rollCount: this.randomRollCount(),
          rollStep: 0
        });
        dieIndex++;
      }
    });
    this.setRolls(rolls);
    this.activeRollSource = source;
    this.lastRollSource = source;
    this.rollInProgress = this.rolls.some(roll => roll.rolling);
    if (!this.rollInProgress) {
      this.addHistoryRecord();
      return;
    }
    this.rolls
      .filter(roll => roll.rolling)
      .forEach(roll => this.scheduleRollTick(roll));
  };

  public setShakeEnabled = async (enabled: boolean): Promise<void> => {
    if (enabled) {
      await this.enableShake();
      return;
    }
    this.disableShake();
  };

  public dieClass = (roll: DieRoll): string =>
    [
      'die-face',
      `die-d${roll.sides}`,
      roll.sides === 6 ? 'die-pips' : 'die-poly',
      roll.locked ? 'is-locked' : '',
      roll.rolling ? 'is-rolling' : '',
      !this.canLockRolls && !roll.rolling ? 'lock-unavailable' : ''
    ].filter(Boolean).join(' ');

  public toggleLock = (roll: DieRoll): void => {
    if (!this.canLockRolls) {
      return;
    }
    const currentRoll = this.rolls.find(item => item.id === roll.id);
    if (!currentRoll) {
      return;
    }
    const locked = !currentRoll.locked;
    this.replaceRoll({ ...currentRoll, locked });
    this.lastRollSource = locked ? `${this.dieLabel(currentRoll)} locked` : `${this.dieLabel(currentRoll)} unlocked`;
  };

  public pressDie = (roll: DieRoll): void => {
    const currentRoll = this.rolls.find(item => item.id === roll.id);
    if (currentRoll?.rolling) {
      this.stopRollingDie(currentRoll.id, true);
      return;
    }
    if (this.rollInProgress) {
      return;
    }
    this.toggleLock(currentRoll ?? roll);
  };

  public unlockAllDice = (): void => {
    if (this.lockedCount < 1) {
      return;
    }
    this.setRolls(this.rolls.map(roll => ({ ...roll, locked: false })));
    this.lastRollSource = 'Unlocked all';
  };

  public dieAriaLabel = (roll: DieRoll): string => {
    if (roll.rolling) {
      return `${this.dieLabel(roll)} rolling ${roll.value}, press to stop`;
    }
    const lockState = this.canLockRolls ? (roll.locked ? ', locked' : ', unlocked') : ', lock unavailable with one die';
    return `${this.dieLabel(roll)} rolled ${roll.value}${lockState}`;
  };

  public dieSymbolClass = (sides: number): string =>
    `die-symbol die-symbol-d${sides}`;

  public dieLabel = (roll: DieRoll): string =>
    `d${roll.sides}`;

  public historyDiceLabel = (die: RollHistoryDie): string =>
    `${die.label} rolled ${die.value}`;

  public pipClass = (pip: number, value: number): string =>
    `pip pip-${pip}${this.pipsByValue.get(value)?.includes(pip) ? ' is-visible' : ''}`;

  public notation = (): string => {
    const parts = this.dice
      .filter(die => die.amount > 0)
      .map(die => `${die.amount}${die.label}`);
    return parts.length > 0 ? parts.join(' + ') : 'No dice';
  };

  private enableShake = async (): Promise<void> => {
    if (typeof DeviceMotionEvent === 'undefined') {
      this.lastRollSource = 'Shake unavailable';
      return;
    }
    const motionEvent = DeviceMotionEvent as DeviceMotionEventConstructor;
    if (typeof motionEvent.requestPermission === 'function') {
      const permission = await motionEvent.requestPermission();
      if (permission !== 'granted') {
        this.lastRollSource = 'Shake blocked';
        return;
      }
    }
    window.addEventListener('devicemotion', this.onDeviceMotion);
    this.shakeEnabled = true;
    this.lastRollSource = 'Shake on';
  };

  private disableShake = (): void => {
    window.removeEventListener('devicemotion', this.onDeviceMotion);
    this.shakeEnabled = false;
    this.lastRollSource = 'Shake off';
  };

  private onDeviceMotion = (event: DeviceMotionEvent): void => {
    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) {
      return;
    }
    const force = Math.abs(acceleration.x ?? 0) + Math.abs(acceleration.y ?? 0) + Math.abs(acceleration.z ?? 0);
    const now = Date.now();
    if (force < this.shakeThreshold || now - this.lastShakeAt < this.shakeCooldownMs) {
      return;
    }
    this.lastShakeAt = now;
    this.zone.run(() => this.rollDice('Shake roll'));
  };

  private scheduleRollTick = (roll: DieRoll): void => {
    const timer = window.setTimeout(() => {
      this.zone.run(() => this.advanceRoll(roll.id));
    }, this.rollFrameMs);
    this.rollTimers.set(roll.id, timer);
  };

  private advanceRoll = (rollId: number): void => {
    this.rollTimers.delete(rollId);
    const roll = this.rolls.find(item => item.id === rollId);
    if (!roll?.rolling) {
      return;
    }
    const nextRoll = {
      ...roll,
      rollStep: roll.rollStep + 1,
      value: this.randomRollValue(roll.sides, roll.id, roll.value)
    };
    if (nextRoll.rollStep >= nextRoll.rollCount) {
      this.replaceRoll({
        ...nextRoll,
        rolling: false,
        rollStep: nextRoll.rollCount
      });
      this.completeRollIfFinished();
      return;
    }
    this.replaceRoll(nextRoll);
    this.scheduleRollTick(nextRoll);
  };

  private stopRollingDie = (rollId: number, userStopped: boolean): void => {
    const timer = this.rollTimers.get(rollId);
    if (timer !== undefined) {
      window.clearTimeout(timer);
      this.rollTimers.delete(rollId);
    }
    const roll = this.rolls.find(item => item.id === rollId);
    if (!roll?.rolling) {
      return;
    }
    this.replaceRoll({
      ...roll,
      rolling: false,
      rollStep: roll.rollCount
    });
    if (userStopped) {
      this.lastRollSource = `${this.dieLabel(roll)} stopped`;
    }
    this.completeRollIfFinished();
  };

  private completeRollIfFinished = (): void => {
    if (!this.rollInProgress || this.rolls.some(roll => roll.rolling)) {
      return;
    }
    this.rollInProgress = false;
    this.lastRollSource = this.activeRollSource;
    this.addHistoryRecord();
  };

  private addHistoryRecord = (): void => {
    const rolledAt = new Date();
    this.history = [{
      id: this.nextHistoryId++,
      rolledAt: rolledAt.toISOString(),
      timeLabel: this.historyTimeFormatter.format(rolledAt),
      total: this.totalValue,
      dice: this.rolls.map(roll => ({
        id: roll.id,
        label: this.dieLabel(roll),
        value: roll.value
      }))
    }, ...this.history].slice(0, 6);
  };

  private cancelRollingDice = (): void => {
    this.rollTimers.forEach(timer => window.clearTimeout(timer));
    this.rollTimers.clear();
    this.rollInProgress = false;
    this.setRolls(this.rolls.map(roll => ({ ...roll, rolling: false, rollCount: 0, rollStep: 0 })));
  };

  private replaceRoll = (roll: DieRoll): void => {
    this.setRolls(this.rolls.map(item => item.id === roll.id ? roll : item));
  };

  private setRolls = (rolls: DieRoll[]): void => {
    this.rolls = rolls;
    this.changeDetector.markForCheck();
  };

  private findDie = (sides: number): DieConfig | undefined =>
    this.dice.find(die => die.sides === sides);

  private lockedRollsBySide = (): Map<number, DieRoll[]> => {
    const rolls = new Map<number, DieRoll[]>();
    this.rolls
      .filter(roll => roll.locked)
      .forEach(roll => {
        const sideRolls = rolls.get(roll.sides) ?? [];
        sideRolls.push({ ...roll });
        rolls.set(roll.sides, sideRolls);
      });
    return rolls;
  };

  private rollsMatchSelection = (): boolean => {
    if (this.rolls.length !== this.totalDice) {
      return false;
    }
    const rollCounts = new Map<number, number>();
    this.rolls.forEach(roll => {
      rollCounts.set(roll.sides, (rollCounts.get(roll.sides) ?? 0) + 1);
    });
    return this.dice.every(die => (rollCounts.get(die.sides) ?? 0) === die.amount);
  };

  private syncLocksForSelection = (): void => {
    if (this.totalDice > 1) {
      return;
    }
    this.setRolls(this.rolls.map(roll => ({ ...roll, locked: false })));
  };

  private updateDiceQueryParam = (): void => {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { dice: this.diceQueryCode() || null },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  };

  private diceQueryCode = (): string =>
    this.dice
      .filter(die => die.amount > 0)
      .map(die => `${die.amount}d${die.sides}`)
      .join('+');

  private applyDiceCode = (code?: string): void => {
    if (!code) {
      return;
    }
    const amounts = new Map<number, number>();
    for (const match of code.matchAll(/(\d+)d(\d+)/gi)) {
      amounts.set(Number(match[2]), Number(match[1]));
    }
    this.dice.forEach(die => {
      die.amount = Math.min(Math.max(amounts.get(die.sides) ?? 0, 0), die.max);
    });
  };

  private rollableFaces = (sides: number, dieIndex: number): DieFace[] =>
    Array.from({ length: sides }, (_, ndx) => ({
      id: `die-${dieIndex}-d${sides}-face-${ndx + 1}`,
      value: ndx + 1
    }));

  private randomRollCount = (): number => {
    const counts = Array.from(
      { length: this.maxRollFrames - this.minRollFrames + 1 },
      (_, ndx) => this.minRollFrames + ndx
    );
    return seededShuffle(counts, count => count).items[0];
  };

  private randomRollValue = (sides: number, dieIndex: number, currentValue?: number): number => {
    const faces = this.rollableFaces(sides, dieIndex);
    let value = seededShuffle(faces, face => face.id).items[0].value;
    for (let attempt = 0; attempt < 4 && faces.length > 1 && value === currentValue; attempt++) {
      value = seededShuffle(faces, face => `${face.id}-${attempt}`).items[0].value;
    }
    return value;
  };
}
