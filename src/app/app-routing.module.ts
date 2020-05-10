import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { PageNotFoundComponent } from '@app/shared';
import { MainPageComponent } from '@app/main-page/main-page.component';



const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('@app/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'main',
        component: MainPageComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        SharedModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }