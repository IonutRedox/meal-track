import { AuthenticationState } from '@app/authentication/authentication.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from '../actions/authentication.actions';

const initialState: AuthenticationState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

const reducer = createReducer(
    initialState,
    on(AuthenticationActions.signInSuccess, (state, { user }) => ({ ...state, user: user, isAuthenticated: true })),
    on(AuthenticationActions.signInFailure, (state, { error }) => ({ ...state, errorMessage: error })),
    on(AuthenticationActions.signOut, state => ({ ...state, user: null, isAuthenticated: false }))
);

export function authenticationReducer(state: AuthenticationState | undefined, action: Action) {
    return reducer(state, action);
}
