import { AuthenticationState } from '@app/authentication/authentication.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from '../actions/authentication.actions'
import { AppState } from '@app/app.state';

const initialState: AuthenticationState = {
    user: undefined,
    isAuthenticated: false,
    errorMessage: '',
    successMessage: ''
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
        successMessage: registerMessage
    })),
    on(AuthenticationActions.signUpFailure, (state, { error }) => ({
        ...state,
        errorMessage: error,
        successMessage: null
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
        successMessage: null
    })),
    on(AuthenticationActions.updateSuccess, (state, { user, updatedMessage }) => ({
        ...state,
        user: user,
        successMessage: updatedMessage
    })),
    on(AuthenticationActions.updateFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(AuthenticationActions.clearMessages, (state) => ({
        ...state,
        errorMessage: null,
        successMessage: null
    }))
);

export function authenticationReducer(state: AuthenticationState, action: Action) {
    return reducer(state, action);
}

export interface State extends AppState {
    authentication: AuthenticationState
}