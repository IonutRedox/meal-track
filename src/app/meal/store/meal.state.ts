import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { FoodState, foodReducer } from './reducers/food.reducers';
import { AppState } from '@app/app.state';
import { InjectionToken } from '@angular/core';


export interface MealState {
    food: FoodState
}

export const mealReducers = new InjectionToken<ActionReducerMap<MealState>>('meal', {
    factory: () => ({
        food: foodReducer
    })
})

export interface State extends AppState {
    meal: MealState;
}

export const getMeal = createFeatureSelector<State, MealState>('meal');