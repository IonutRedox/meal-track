import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { AuthenticationState } from '@app/authentication/authentication.state';

export const getAuthentication = createFeatureSelector<AppState, AuthenticationState>('authentication');
export const getAuthenticationError = createSelector(getAuthentication, (state: AuthenticationState) => state.errorMessage);
export const getAuthenticationUser = createSelector(getAuthentication, (state: AuthenticationState) => state.user);
export const getAuthenticationStatus = createSelector(getAuthentication, (state: AuthenticationState) => state.isAuthenticated);
