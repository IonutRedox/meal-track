import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
