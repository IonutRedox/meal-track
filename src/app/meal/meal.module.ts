import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LayoutComponent,
         FoodComponent,
         DashboardComponent,
         FoodItemComponent,
         FoodEffects,
         mealReducers } from '@app/meal';
import { SharedModule } from '@app/shared/shared.module';
import { AuthenticationGuard } from '@app/core';


const mealRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'food', component: FoodComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
]


@NgModule({
  declarations: [
    LayoutComponent,
    FoodComponent,
    DashboardComponent,
    FoodItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(mealRoutes),
    StoreModule.forFeature('meal', mealReducers),
    EffectsModule.forFeature([FoodEffects])
  ]
})
export class MealModule { }
