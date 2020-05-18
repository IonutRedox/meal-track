import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationService, User } from '@app/core';
import * as AuthenticationActions from '@app/authentication/store/actions/authentication.actions';



@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signIn),
        map((action) => action.user),
        switchMap((user: User) => {
            return this.authenticationService.signIn(user.email, user.password).pipe(
                map((user) => {
                    return AuthenticationActions.signInSuccess({ user: user });
                }),
                catchError((error) => {
                    return of(AuthenticationActions.signInFailure({ error: error.error.message }));
                }));
        })));

    signInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signInSuccess),
        map((action) => action.user),
        tap((user: User) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/');
        })
    ), { dispatch: false });

    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signUp),
        map((action) => action.user),
        switchMap((user: User) => {
            return this.authenticationService.signUp(user).pipe(
                map((user: User) => {
                    return AuthenticationActions.signUpSuccess({ user: user, registerMessage: 'Successful registered' });
                }),
                catchError((error) => {
                    return of(AuthenticationActions.signUpFailure({ error: error.error.message }));
                }));
        })));

    signOut$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signOut),
        tap(() => {
            this.authenticationService.signOut();
            this.router.navigateByUrl('/auth');
        })), { dispatch: false });
}