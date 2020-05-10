import { AuthenticationState } from './authentication/authentication.state';
import { authenticationReducer } from './authentication/store/reducers/authentication.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    authentication: AuthenticationState
}

export const appReducers: ActionReducerMap<AppState> = {
    authentication: authenticationReducer
}
