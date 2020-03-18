import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
