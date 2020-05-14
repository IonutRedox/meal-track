import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AuthenticationService } from '@app/core';
import { Router } from '@angular/router';
import { createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { signInSuccess, signInFailure, signIn, signUpSuccess, signUp, signUpFailure } from '@app/authentication/store/actions/authentication.actions';
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
                    return of(signInFailure({ error: error.error.message }));
                }));
        })));

    signInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(signInSuccess),
        map((action) => action.user),
        tap((user: User) => {
            localStorage.setItem('user_access_token', user.token);
            this.router.navigateByUrl('/');
        })
    ), { dispatch: false });

    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(signUp),
        map((action) => action.user),
        switchMap((user: User) => {
            return this.authenticationService.signUp(user).pipe(
                map((user: User) => {
                    return signUpSuccess({ user: user, registerMessage: 'Successful registered' });
                }),
                catchError((error) => {
                    return of(signUpFailure({ error: error.error.message }));
                }));
        }))); 
    }