import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from '@app/app.component';

import { AuthenticationModule } from '@app/authentication/authentication.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '@app/shared/utils/custom-route-serializer';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from '@app/shared';
import { MealModule } from '@app/meal/meal.module';

const appRoutes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AuthenticationModule,
    MealModule,
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
