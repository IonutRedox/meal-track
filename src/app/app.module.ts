import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from '@app/app.component';

import { AuthenticationModule } from '@app/authentication/authentication.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
