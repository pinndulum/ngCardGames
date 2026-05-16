import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { resolveShuffleSeed, seededShuffle, shuffleSeedLabel } from '../../../../utils/seeded-shuffle';

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
}

interface DieFace {
  id: string;
  value: number;
}

interface RollHistory {
  label: string;
  total: number;
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
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

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
  public rollSeed = '';
  public shakeEnabled = false;
  public shakeNotice = 'Shake off';
  public lastRollSource = 'Ready';

  private lastRollDiceCode = '';
  private nextRollId = 0;
  private lastShakeAt = 0;
  private readonly shakeThreshold = 30;
  private readonly shakeCooldownMs = 900;

  ngOnInit(): void {
    this.applyDiceCode(this.route.snapshot.queryParamMap.get('dice') ?? undefined);
    const seed = this.route.snapshot.queryParamMap.get('seed') ?? undefined;
    if (seed && this.canRoll) {
      this.rollDice('Replay', seed);
    }
  }

  ngOnDestroy(): void {
    this.disableShake();
  }

  public get totalDice(): number {
    return this.dice.reduce((total, die) => total + die.amount, 0);
  }

  public get totalValue(): number {
    return this.rolls.reduce((total, die) => total + die.value, 0);
  }

  public get canRoll(): boolean {
    return this.totalDice > 0 && !this.allCurrentRollsLocked;
  }

  public get rollSeedLabel(): string {
    return shuffleSeedLabel(this.rollSeed, 8);
  }

  public get lockedCount(): number {
    return this.rolls.filter(roll => roll.locked).length;
  }

  public get canLockRolls(): boolean {
    return this.totalDice > 1 && this.rolls.length > 1;
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
    const die = this.findDie(sides);
    if (!die) {
      return;
    }
    const parsed = Number(amount);
    die.amount = Number.isFinite(parsed) ? Math.min(Math.max(Math.trunc(parsed), 0), die.max) : 0;
    this.syncLocksForSelection();
  };

  public applyPreset = (preset: DicePreset): void => {
    this.dice.forEach(die => {
      die.amount = preset.dice[die.sides] ?? 0;
    });
    this.syncLocksForSelection();
    this.lastRollSource = preset.name;
  };

  public clearDice = (): void => {
    this.dice.forEach(die => {
      die.amount = 0;
    });
    this.rolls = [];
    this.rollSeed = '';
    this.lastRollDiceCode = '';
    this.lastRollSource = 'Cleared';
  };

  public resetDiceSelection = (): void => {
    this.dice.forEach(die => {
      die.amount = die.sides === 6 ? 1 : 0;
    });
    this.rolls = [];
    this.rollSeed = '';
    this.lastRollDiceCode = '';
    this.lastRollSource = 'Reset';
  };

  public rollDice = (source = 'Rolled', seed?: string): void => {
    if (!this.canRoll) {
      return;
    }
    const rollSeed = resolveShuffleSeed(seed ? undefined : 3, seed);
    const rolls: DieRoll[] = [];
    const lockedBySide = this.lockedRollsBySide();
    let dieIndex = 0;
    this.dice.forEach(die => {
      for (let ndx = 0; ndx < die.amount; ndx++) {
        const lockedRoll = lockedBySide.get(die.sides)?.shift();
        if (lockedRoll) {
          rolls.push(lockedRoll);
          dieIndex++;
          continue;
        }
        const dieFaces = this.rollableFaces(die.sides, dieIndex);
        const value = seededShuffle(dieFaces, face => face.id, undefined, rollSeed).items[0].value;
        rolls.push({
          id: this.nextRollId++,
          sides: die.sides,
          value,
          locked: false
        });
        dieIndex++;
      }
    });
    this.rolls = rolls;
    this.rollSeed = rollSeed;
    this.lastRollDiceCode = this.diceCode();
    this.lastRollSource = source;
    this.history = [{
      label: this.notation(),
      total: this.totalValue
    }, ...this.history].slice(0, 6);
  };

  public replayRoll = (): void => {
    if (!this.rollSeed) {
      return;
    }
    this.applyDiceCode(this.lastRollDiceCode);
    this.rollDice('Replay', this.rollSeed);
  };

  public setSeedQueryParam = (): void => {
    if (!this.rollSeed) {
      return;
    }
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { dice: this.lastRollDiceCode || this.diceCode(), seed: this.rollSeed },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  };

  public toggleShake = async (): Promise<void> => {
    if (this.shakeEnabled) {
      this.disableShake();
      return;
    }
    await this.enableShake();
  };

  public setShakeEnabled = async (enabled: boolean): Promise<void> => {
    if (enabled) {
      await this.enableShake();
      return;
    }
    this.disableShake();
  };

  public dieClass = (roll: DieRoll): string =>
    `die-face die-d${roll.sides} ${roll.sides === 6 ? 'die-pips' : 'die-poly'}`;

  public toggleLock = (roll: DieRoll): void => {
    if (!this.canLockRolls) {
      return;
    }
    roll.locked = !roll.locked;
    this.lastRollSource = roll.locked ? `${this.dieLabel(roll)} locked` : `${this.dieLabel(roll)} unlocked`;
  };

  public dieAriaLabel = (roll: DieRoll): string => {
    const lockState = this.canLockRolls ? (roll.locked ? ', locked' : ', unlocked') : ', lock unavailable with one die';
    return `${this.dieLabel(roll)} rolled ${roll.value}${lockState}`;
  };

  public dieSymbolClass = (sides: number): string =>
    `die-symbol die-symbol-d${sides}`;

  public dieLabel = (roll: DieRoll): string =>
    `d${roll.sides}`;

  public pipClass = (pip: number): string =>
    `pip pip-${pip}`;

  public notation = (): string => {
    const parts = this.dice
      .filter(die => die.amount > 0)
      .map(die => `${die.amount}${die.label}`);
    return parts.length > 0 ? parts.join(' + ') : 'No dice';
  };

  private enableShake = async (): Promise<void> => {
    if (typeof DeviceMotionEvent === 'undefined') {
      this.shakeNotice = 'Shake unavailable';
      return;
    }
    const motionEvent = DeviceMotionEvent as DeviceMotionEventConstructor;
    if (typeof motionEvent.requestPermission === 'function') {
      const permission = await motionEvent.requestPermission();
      if (permission !== 'granted') {
        this.shakeNotice = 'Shake blocked';
        return;
      }
    }
    window.addEventListener('devicemotion', this.onDeviceMotion);
    this.shakeEnabled = true;
    this.shakeNotice = 'Shake on';
  };

  private disableShake = (): void => {
    window.removeEventListener('devicemotion', this.onDeviceMotion);
    this.shakeEnabled = false;
    this.shakeNotice = 'Shake off';
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
    this.rollDice('Shake roll');
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
    this.rolls = this.rolls.map(roll => ({ ...roll, locked: false }));
  };

  private diceCode = (): string =>
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
}
