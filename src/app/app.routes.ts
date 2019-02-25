import { RouterModule, Routes } from '@angular/router';

import { IsesionComponent } from './isesion/isesion.component';
import { RegistroComponent } from './isesion/registro.component';
import { PaginanoencontradaComponent } from './compartido/paginanoencontrada/paginanoencontrada.component';



const appRoutes: Routes = [
    { path: 'isesion', component: IsesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', component: PaginanoencontradaComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );