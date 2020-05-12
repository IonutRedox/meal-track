import { User } from '@app/core/models/user.model';

export interface AuthenticationState {
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: string | null;
    registerMessage: string | null;
}
