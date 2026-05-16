import { AfterViewInit, Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { seededShuffle, shuffleSeedLabel } from '../../../../utils/seeded-shuffle';

type TileFamily = 'bamboo' | 'dots' | 'cracks' | 'winds' | 'dragons' | 'flowers';

interface TileFace {
  key: string;
  label: string;
  sublabel: string;
  family: TileFamily;
}

interface TilePosition {
  x: number;
  y: number;
  z: number;
}

interface MahjongTile extends TilePosition {
  id: string;
  face: TileFace;
  matched: boolean;
}

interface TileFaceDeal {
  id: string;
  face: TileFace;
}

interface MahjongPattern {
  id: string;
  name: string;
  description: string;
  width: number;
  height: number;
  layers: string[][];
}

const numberedFaces = (family: TileFamily, sublabel: string): TileFace[] =>
  Array.from({ length: 9 }, (_, ndx) => ({
    key: `${family}-${ndx + 1}`,
    label: `${ndx + 1}`,
    sublabel,
    family
  }));

const TILE_FACES: TileFace[] = [
  ...numberedFaces('bamboo', 'Bam'),
  ...numberedFaces('dots', 'Dot'),
  ...numberedFaces('cracks', 'Wan'),
  { key: 'wind-east', label: 'E', sublabel: 'Wind', family: 'winds' },
  { key: 'wind-south', label: 'S', sublabel: 'Wind', family: 'winds' },
  { key: 'wind-west', label: 'W', sublabel: 'Wind', family: 'winds' },
  { key: 'wind-north', label: 'N', sublabel: 'Wind', family: 'winds' },
  { key: 'dragon-red', label: 'Red', sublabel: 'Dragon', family: 'dragons' },
  { key: 'dragon-green', label: 'Green', sublabel: 'Dragon', family: 'dragons' },
  { key: 'dragon-white', label: 'White', sublabel: 'Dragon', family: 'dragons' },
  { key: 'flower-plum', label: 'Plum', sublabel: 'Flower', family: 'flowers' },
  { key: 'flower-orchid', label: 'Orchid', sublabel: 'Flower', family: 'flowers' },
  { key: 'flower-bamboo', label: 'Bam', sublabel: 'Flower', family: 'flowers' },
  { key: 'flower-mum', label: 'Mum', sublabel: 'Flower', family: 'flowers' }
];

const PATTERNS: MahjongPattern[] = [{
  id: 'turtle',
  name: 'Turtle',
  description: 'Wide shoulders, layered middle, and a small crown.',
  width: 12,
  height: 7,
  layers: [
    [
      '   ######   ',
      ' ########## ',
      '############',
      '############',
      '############',
      ' ########## ',
      '   ######   '
    ],
    [
      '            ',
      '   ######   ',
      '  ########  ',
      '  ########  ',
      '  ########  ',
      '   ######   ',
      '            '
    ],
    [
      '            ',
      '            ',
      '    ####    ',
      '    ####    ',
      '    ####    ',
      '            ',
      '            '
    ],
    [
      '            ',
      '            ',
      '            ',
      '     ##     ',
      '            ',
      '            ',
      '            '
    ]
  ]
}, {
  id: 'fortress',
  name: 'Fortress',
  description: 'Heavy base with a compact tower in the center.',
  width: 10,
  height: 8,
  layers: [
    [
      '  ######  ',
      ' ######## ',
      '##########',
      '##########',
      '##########',
      '##########',
      ' ######## ',
      '  ######  '
    ],
    [
      '          ',
      '  ######  ',
      '  ######  ',
      '  ######  ',
      '  ######  ',
      '  ######  ',
      '  ######  ',
      '          '
    ],
    [
      '          ',
      '          ',
      '   ####   ',
      '   ####   ',
      '   ####   ',
      '   ####   ',
      '          ',
      '          '
    ],
    [
      '          ',
      '          ',
      '          ',
      '    ##    ',
      '    ##    ',
      '          ',
      '          ',
      '          '
    ]
  ]
}, {
  id: 'bridge',
  name: 'Bridge',
  description: 'Two ends joined by a raised crossing.',
  width: 12,
  height: 6,
  layers: [
    [
      '##        ##',
      '####    ####',
      '############',
      '############',
      '####    ####',
      '##        ##'
    ],
    [
      '            ',
      ' ##      ## ',
      ' ####  #### ',
      ' ####  #### ',
      ' ##      ## ',
      '            '
    ],
    [
      '            ',
      '            ',
      '   ######   ',
      '   ######   ',
      '            ',
      '            '
    ]
  ]
}, {
  id: 'steps',
  name: 'Steps',
  description: 'A diagonal climb with offset upper ledges.',
  width: 9,
  height: 8,
  layers: [
    [
      '##       ',
      '####     ',
      '######   ',
      '######## ',
      ' ########',
      '   ######',
      '     ####',
      '       ##'
    ],
    [
      '         ',
      ' ##      ',
      ' ####    ',
      ' ######  ',
      '  ###### ',
      '    #### ',
      '      ## ',
      '         '
    ],
    [
      '         ',
      '         ',
      '  ##     ',
      '  ####   ',
      '   ####  ',
      '     ##  ',
      '         ',
      '         '
    ],
    [
      '         ',
      '         ',
      '         ',
      '   ##    ',
      '    ##   ',
      '         ',
      '         ',
      '         '
    ]
  ]
}];

@Component({
  selector: 'app-mahjong',
  templateUrl: './mahjong.component.html',
  styleUrls: ['./mahjong.component.scss']
})
export class MahjongComponent implements AfterViewInit, OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly mahjongTable = viewChild<ElementRef<HTMLDivElement>>('mahjongTable');

  public readonly patterns = PATTERNS;
  public selectedPattern = PATTERNS[0];
  public tiles: MahjongTile[] = [];
  public selectedTile?: MahjongTile;
  public hintedIds: string[] = [];
  public gameSeed = '';
  public moves = 0;
  public message = 'Match open pairs to clear the table.';

  ngOnInit(): void {
    this.applyRoutePattern();
    this.newGame(this.routeSeed());
  }

  ngAfterViewInit(): void {
    this.alignBoardStart();
  }

  public get visibleTiles(): MahjongTile[] {
    return this.tiles.filter(tile => !tile.matched);
  }

  public get remainingCount(): number {
    return this.visibleTiles.length;
  }

  public get freeCount(): number {
    return this.visibleTiles.filter(tile => this.isTileFree(tile)).length;
  }

  public get availableMoveCount(): number {
    return this.availablePairs().length;
  }

  public get isComplete(): boolean {
    return this.remainingCount === 0;
  }

  public get boardClass(): string {
    return `mahjong-board layout-${this.selectedPattern.id}`;
  }

  public get gameSeedLabel(): string {
    return shuffleSeedLabel(this.gameSeed, 8);
  }

  public selectPattern = (patternId: string): void => {
    const pattern = this.patterns.find(item => item.id === patternId);
    if (!pattern) {
      return;
    }
    this.selectedPattern = pattern;
    this.newGame();
  };

  public newGame = (seed?: string): void => {
    const positions = this.patternPositions(this.selectedPattern);
    const deal = this.tileFacesForPositions(positions.length, seed);
    this.gameSeed = deal.seed;
    this.tiles = positions.map((position, ndx) => ({
      ...position,
      id: `${this.selectedPattern.id}-${position.z}-${position.y}-${position.x}-${ndx}`,
      face: deal.faces[ndx],
      matched: false
    }));
    this.selectedTile = undefined;
    this.hintedIds = [];
    this.moves = 0;
    this.message = `${this.selectedPattern.name} set. ${positions.length / 2} pairs on the table.`;
    this.alignBoardStart();
  };

  public replayGame = (): void => {
    if (!this.gameSeed) {
      return;
    }
    this.newGame(this.gameSeed);
  };

  public reshuffleRemaining = (): void => {
    const remaining = this.visibleTiles;
    if (remaining.length < 2) {
      return;
    }
    const remainingFaces = remaining.map((tile, ndx) => ({
      id: `${tile.id}:${tile.face.key}:${ndx}`,
      face: tile.face
    }));
    const result = seededShuffle(remainingFaces, item => item.id, 3);
    remaining.forEach((tile, ndx) => {
      tile.face = result.items[ndx].face;
    });
    this.selectedTile = undefined;
    this.hintedIds = [];
    this.moves += 1;
    this.message = 'The remaining tiles were mixed.';
  };

  public setSeedQueryParam = (): void => {
    if (!this.gameSeed) {
      return;
    }
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { pattern: this.selectedPattern.id, seed: this.gameSeed },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  };

  public showHint = (): void => {
    const pair = this.availablePairs()[0];
    if (!pair) {
      this.hintedIds = [];
      this.message = this.remainingCount > 0 ? 'No open pairs. Shuffle or start fresh.' : 'Table cleared.';
      return;
    }
    this.hintedIds = [pair[0].id, pair[1].id];
    this.message = `Try the ${pair[0].face.label} ${pair[0].face.sublabel} pair.`;
  };

  public selectTile = (tile: MahjongTile): void => {
    if (!this.isTileFree(tile)) {
      return;
    }
    this.hintedIds = [];
    if (this.selectedTile?.id === tile.id) {
      this.selectedTile = undefined;
      return;
    }
    if (!this.selectedTile) {
      this.selectedTile = tile;
      this.message = `${tile.face.label} ${tile.face.sublabel} selected.`;
      return;
    }
    if (this.selectedTile.face.key === tile.face.key) {
      this.selectedTile.matched = true;
      tile.matched = true;
      this.selectedTile = undefined;
      this.moves += 1;
      this.message = this.isComplete ? 'Table cleared.' : 'Pair matched.';
      return;
    }
    this.selectedTile = tile;
    this.message = `${tile.face.label} ${tile.face.sublabel} selected.`;
  };

  public isTileFree = (tile: MahjongTile): boolean => {
    if (tile.matched) {
      return false;
    }
    const tiles = this.visibleTiles;
    const hasTileAbove = tiles.some(other =>
      other.id !== tile.id &&
      other.z > tile.z &&
      other.x === tile.x &&
      other.y === tile.y
    );
    if (hasTileAbove) {
      return false;
    }
    const leftBlocked = tiles.some(other =>
      other.id !== tile.id &&
      other.z === tile.z &&
      other.y === tile.y &&
      other.x === tile.x - 1
    );
    const rightBlocked = tiles.some(other =>
      other.id !== tile.id &&
      other.z === tile.z &&
      other.y === tile.y &&
      other.x === tile.x + 1
    );
    return !leftBlocked || !rightBlocked;
  };

  public isSelected = (tile: MahjongTile): boolean =>
    this.selectedTile?.id === tile.id;

  public isHinted = (tile: MahjongTile): boolean =>
    this.hintedIds.includes(tile.id);

  public tileClass = (tile: MahjongTile): string => {
    const isLongTile = tile.face.family === 'dragons' || tile.face.family === 'flowers';
    return `mahjong-tile mahjong-${tile.face.family} mahjong-${tile.face.key}${isLongTile ? ' mahjong-long' : ''} tile-col-${tile.x} tile-row-${tile.y} tile-layer-${tile.z}`;
  };

  private patternPositions = (pattern: MahjongPattern): TilePosition[] => {
    const positions: TilePosition[] = [];
    pattern.layers.forEach((rows, z) => {
      rows.forEach((row, y) => {
        Array.from(row).forEach((mark, x) => {
          if (mark === '#') {
            positions.push({ x, y, z });
          }
        });
      });
    });
    return positions;
  };

  private routeSeed = (): string | undefined =>
    this.route.snapshot.queryParamMap.get('seed') || undefined;

  private applyRoutePattern = (): void => {
    const patternId = this.route.snapshot.queryParamMap.get('pattern');
    const pattern = this.patterns.find(item => item.id === patternId);
    if (pattern) {
      this.selectedPattern = pattern;
    }
  };

  private tileFacesForPositions = (positionCount: number, seed?: string): { faces: TileFace[]; seed: string } => {
    const pairCount = positionCount / 2;
    const pairs = Array.from({ length: pairCount }, (_, ndx) => {
      const face = TILE_FACES[ndx % TILE_FACES.length];
      return [
        { id: `${face.key}-${ndx}-a`, face },
        { id: `${face.key}-${ndx}-b`, face }
      ] satisfies TileFaceDeal[];
    }).flat();
    const result = seededShuffle(pairs, pair => pair.id, seed ? undefined : 3, seed);
    return {
      faces: result.items.map(item => item.face),
      seed: result.seed
    };
  };

  private availablePairs = (): [MahjongTile, MahjongTile][] => {
    const freeTiles = this.visibleTiles.filter(tile => this.isTileFree(tile));
    const pairs: [MahjongTile, MahjongTile][] = [];
    freeTiles.forEach((tile, ndx) => {
      const match = freeTiles.slice(ndx + 1).find(other => other.face.key === tile.face.key);
      if (match) {
        pairs.push([tile, match]);
      }
    });
    return pairs;
  };

  private alignBoardStart = (): void => {
    window.requestAnimationFrame(() => {
      const table = this.mahjongTable()?.nativeElement;
      if (!table) {
        return;
      }
      table.scrollLeft = table.scrollWidth - table.clientWidth;
    });
  };

}
