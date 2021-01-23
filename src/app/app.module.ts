import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { KlondikeComponent } from './components/games/facecards/solitaire/klondike/klondike.component';
import { SpiderComponent } from './components/games/facecards/solitaire/spider/spider.component';
import { HomeComponent } from './components/home/home.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { SafePipe } from './pipes/safe.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    TimePipe,
    SafePipe,
    AppComponent,
    AlertComponent,
    ModalDialogComponent,
    HomeComponent,
    KlondikeComponent,
    SpiderComponent
  ],
  imports: [
    DragDropModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
