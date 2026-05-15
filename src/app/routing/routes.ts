import { Routes } from '@angular/router';

export const routes: Routes = [{
        path: 'games/solitaire/klondike',
        loadComponent: () => import('../components/pages/games/facecards/solitaire/klondike/klondike.component')
            .then(c => c.KlondikeComponent)
    }, {
        path: 'games/solitaire/spider',
        loadComponent: () => import('../components/pages/games/facecards/solitaire/spider/spider.component')
            .then(c => c.SpiderComponent)
    }, {
        path: 'games/solitaire/freecell',
        loadComponent: () => import('../components/pages/games/facecards/solitaire/freecell/freecell.component')
            .then(c => c.FreeCellComponent)
    }, {
        path: 'games/freeplay',
        loadComponent: () => import('../components/pages/games/facecards/freeplay/freeplay.component')
            .then(c => c.FreePlayComponent)
    }, {
        path: '',
        loadComponent: () => import('../components/pages/home/home.component')
            .then(c => c.HomeComponent)
    }, {
        path: '**', redirectTo: ''
    }
];
