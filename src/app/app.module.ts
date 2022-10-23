import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Exercice3Component } from './components/exercice3/exercice3.component';
import { FilsComponent } from './components/exercice3/fils/fils.component';
import { CvComponent } from './components/cv/cv.component';
import { ListeComponent } from './components/cv/liste/liste.component';
import { DetailComponent } from './components/cv/detail/detail.component';
import { ItemComponent } from './components/cv/liste/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    FilsComponent,
    CvComponent,
    ListeComponent,
    DetailComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
