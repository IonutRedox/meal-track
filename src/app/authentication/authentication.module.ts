import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
