import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { InicioComponent } from './inicio/inicio.component';

const paginasRoutes: Routes = [
    {
        path: '',
        component: PaginasComponent,
        children: [
            { path: 'principal', component: InicioComponent },
            { path: '', redirectTo: '/principal', pathMatch: 'full' },
        ]
    }
];

export const PAGINAS_ROUTES = RouterModule.forChild( paginasRoutes );