import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from '@app/app.component';
import { MainPageComponent } from '@app/main-page/main-page.component';

import { AuthenticationModule } from '@app/authentication/authentication.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/utils/custom-route-serializer';
import { appReducers } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared';


const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthenticationModule,
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
