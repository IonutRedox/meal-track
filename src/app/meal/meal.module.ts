import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '@app/meal/layout/layout.component';
import { FoodComponent } from '@app/meal/food/food.component';
import { DashboardComponent } from '@app/meal/dashboard/dashboard.component';
import { AuthenticationGuard } from '@app/core/guard/authentication.guard';
import { FoodItemComponent } from './food-item/food-item.component';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './store/effects/food.effects';
import { mealReducers } from './store/meal.state';

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
