import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';



const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
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