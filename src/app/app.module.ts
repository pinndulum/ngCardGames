import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreePlayComponent } from './components/pages/games/facecards/freeplay/freeplay.component';
import { FreeCellComponent } from './components/pages/games/facecards/solitaire/freecell/freecell.component';
import { KlondikeComponent } from './components/pages/games/facecards/solitaire/klondike/klondike.component';
import { SpiderComponent } from './components/pages/games/facecards/solitaire/spider/spider.component';
import { DialogTemplateComponent } from './components/controls/dialog-template/dialog-template.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgVarDirective } from './directives/ng-var.directive';
import { MaterialModule } from './modules/material.module';
import * as pipes from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    FreePlayComponent,
    FreeCellComponent,
    KlondikeComponent,
    SpiderComponent,
    DialogTemplateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    NgVarDirective,
    pipes.PrecisionPipe,
    pipes.ReplacePipe,
    pipes.SafePipe,
    pipes.TimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
