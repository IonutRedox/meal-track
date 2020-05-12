import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl('/auth');
        return false;
    }
}