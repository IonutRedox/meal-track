import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FoodService } from '@app/core/services/food.service';
import * as FoodActions from '@app/meal/store/actions/food.actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

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