import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AlertService } from '@app/core';
import { AuthenticationService } from '@app/core';
import { FoodService } from '@app/core/services/food.service';


@NgModule({
  providers: [
    AlertService,
    AuthenticationService,
    FoodService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}