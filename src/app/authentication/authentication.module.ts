import { NgModule } from '@angular/core';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
