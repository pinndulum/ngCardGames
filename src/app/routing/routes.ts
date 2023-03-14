import { Routes } from '@angular/router';
import { FreePlayComponent } from '../components/pages/games/facecards/freeplay/freeplay.component';
import { FreeCellComponent } from '../components/pages/games/facecards/solitaire/freecell/freecell.component';
import { KlondikeComponent } from '../components/pages/games/facecards/solitaire/klondike/klondike.component';
import { SpiderComponent } from '../components/pages/games/facecards/solitaire/spider/spider.component';
// import { HomeComponent } from '../components/pages/home/home.component';

export const routes: Routes = [{
        path: 'games/solitaire/klondike', component: KlondikeComponent
    }, {
        path: 'games/solitaire/spider', component: SpiderComponent 
    }, {
        path: 'games/solitaire/freecell', component: FreeCellComponent
    }, {
        path: 'games/freeplay', component: FreePlayComponent
    }, {
        path: '', component: KlondikeComponent
        // path: '', component: HomeComponent
    }, {
        path: '**', redirectTo: ''
    }
];
