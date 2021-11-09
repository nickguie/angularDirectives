import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex02Component } from './views/exngif/ex02/ex02.component';
import { FormsModule } from '@angular/forms';
import { Ex03Component } from './views/exngif/ex03/ex03.component';
import { Ex04Component } from './views/exngif/ex04/ex04.component';
import { ExemplosComponent } from './views/exngfor/exemplos/exemplos.component';

import { Ex01ngforComponent } from './views/exngfor/ex01ngfor/ex01ngfor.component';
import { Ex02ngforComponent } from './views/exngfor/ex02ngfor/ex02ngfor.component';
import { ExemploNgSwitchComponent } from './views/exngswitch/exemplo-ng-switch/exemplo-ng-switch.component'

@NgModule({
  declarations: [
    AppComponent,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    ExemplosComponent,
    Ex01ngforComponent,
    Ex02ngforComponent,
    ExemploNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
