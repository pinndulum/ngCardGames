import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { FreePlayComponent } from '../components/games/facecards/freeplay/freeplay.component';
import { FreeCellComponent } from '../components/games/facecards/solitaire/freecell/freecell.component';
import { KlondikeComponent } from '../components/games/facecards/solitaire/klondike/klondike.component';
import { SpiderComponent } from '../components/games/facecards/solitaire/spider/spider.component';

const routes: Routes = [
  { path: 'games/solitaire/klondike', component: KlondikeComponent },
  { path: 'games/solitaire/spider', component: SpiderComponent },
  { path: 'games/solitaire/freecell', component: FreeCellComponent },
  { path: 'games/freeplay', component: FreePlayComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
