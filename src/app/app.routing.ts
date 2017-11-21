import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login",
    },

    { 
        path: 'login', 
        component: LoginComponent,
    },
    { 
        path: 'main', 
        component: MainComponent, 
    },
];

export const routing = RouterModule.forRoot(appRoutes);