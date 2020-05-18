import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FoodService } from '@app/core';
import * as FoodActions from '@app/meal/store/actions/food.actions';

@Injectable()
export class FoodEffects {
    constructor(
        private actions$: Actions,
        private foodService: FoodService
    ) { }


    load$ = createEffect(() => this.actions$.pipe(
        ofType(FoodActions.loadFoods),
        switchMap(() => {
            return this.foodService.getFoods().pipe(
                map(data => FoodActions.loadFoodsSuccess({ foods: data })),
                catchError(error => of(FoodActions.loadFoodsFailure({ error: error.error.message }))))
        })));
}