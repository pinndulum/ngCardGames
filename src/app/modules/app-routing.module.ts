import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { KlondikeComponent } from '../components/games/facecards/solitaire/klondike/klondike.component';
import { SpiderComponent } from '../components/games/facecards/solitaire/spider/spider.component';

const routes: Routes = [
  { path: 'games/solitaire/klondike', component: KlondikeComponent },
  { path: 'games/solitaire/spider', component: SpiderComponent },
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
