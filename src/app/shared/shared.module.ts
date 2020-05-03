import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from '@app/shared';
import { AlertComponent } from '@app/shared';



@NgModule({
  declarations: [PageNotFoundComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PageNotFoundComponent,
    AlertComponent
  ]
})
export class SharedModule { }
