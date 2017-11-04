import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login",
    },

    { 
        path: 'login', 
        component: LoginComponent 
    },
];

export const routing = RouterModule.forRoot(appRoutes);