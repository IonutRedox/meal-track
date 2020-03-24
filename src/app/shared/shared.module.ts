import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [PageNotFoundComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    PageNotFoundComponent,
    AlertComponent
  ]
})
export class SharedModule { }
