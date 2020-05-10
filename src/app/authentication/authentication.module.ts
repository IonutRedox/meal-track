import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { authenticationReducer } from './store/reducers/authentication.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './store/effects/authentication.effects';
import { Routes, RouterModule } from '@angular/router';

const authenticationRoutes: Routes = [
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(authenticationRoutes),
    StoreModule.forFeature('authentication', authenticationReducer),
    EffectsModule.forFeature([AuthenticationEffects]),
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
