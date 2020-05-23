import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { FoodState, foodReducer } from './reducers/food.reducers';
import { MealsState, mealReducer } from './reducers/meals.reducers';
import { AppState } from '@app/app.state';
import { InjectionToken } from '@angular/core';


export interface MealState {
    food: FoodState,
    meals: MealsState
}

export const mealReducers = new InjectionToken<ActionReducerMap<MealState>>('meal', {
    factory: () => ({
        food: foodReducer,
        meals: mealReducer
    })
})

export interface State extends AppState {
    meal: MealState;
}

export const getMeal = createFeatureSelector<State, MealState>('meal');