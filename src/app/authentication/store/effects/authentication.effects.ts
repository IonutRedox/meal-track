import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AuthenticationService } from '@app/core';
import { Router } from '@angular/router';
import { createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { signInSuccess, signInFailure, AuthenticationActionTypes, signIn } from '@app/authentication/store/actions/authentication.actions';
import { User } from '@app/core/models/user.model';
import { of } from 'rxjs';


@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(signIn),
        map((action) => action.user),
        switchMap((user: User) => {
            return this.authenticationService.signIn(user.email, user.password).pipe(
                map((user) => {
                    return signInSuccess({ user: user });
                }),
                catchError((error) => {
                    return of(signInFailure({ error: error }));
                }));
        })));

    signInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(signInSuccess),
        map((action) => action.user),
        tap((user: User) => {
            localStorage.setItem('token', user.token);
            localStorage.setItem('email', user.email);
            this.router.navigateByUrl('/main');
        })
    ), { dispatch: false });
}