import { NgModule } from '@angular/core';
import { PAGINAS_ROUTES } from './paginas.routes';

import { CompartidoModule } from '../compartido/compartido.module';

import { PaginasComponent } from './paginas.component';

import { InicioComponent } from './inicio/inicio.component';



@NgModule({
    declarations: [
        InicioComponent,
        PaginasComponent
    ],
    exports: [
        InicioComponent
    ],
    imports: [
        CompartidoModule,
        PAGINAS_ROUTES
    ]
})
export class PaginasModule { }

