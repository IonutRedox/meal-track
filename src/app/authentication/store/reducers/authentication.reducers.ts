import { AuthenticationState } from '@app/authentication/authentication.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from '../actions/authentication.actions';

const initialState: AuthenticationState = {
    user: null,
    isAuthenticated: false,
    errorMessage: null,
    registerMessage: null
};

const reducer = createReducer(
    initialState,
    on(AuthenticationActions.signInSuccess, (state, { user }) => ({
        ...state,
        user: user,
        isAuthenticated: true,
        errorMessage: null
    })),
    on(AuthenticationActions.signInFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(AuthenticationActions.signUpSuccess, (state, { user, registerMessage }) => ({
        ...state,
        errorMessage: null,
        registerMessage: registerMessage
    })),
    on(AuthenticationActions.signUpFailure, (state, { error }) => ({
        ...state,
        errorMessage: error,
        registerMessage:null
    })),
    on(AuthenticationActions.signOut, (state) => ({
        ...state,
        user: null,
        isAuthenticated: false
    })),
    on(AuthenticationActions.clear, (state) => ({
        ...state,
        user: null,
        isAuthenticated: false,
        errorMessage: null,
        registerMessage: null
    }))
);

export function authenticationReducer(state: AuthenticationState, action: Action) {
    return reducer(state, action);
}