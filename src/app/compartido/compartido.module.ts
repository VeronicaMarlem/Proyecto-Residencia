import { NgModule } from '@angular/core';

import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
    declarations: [
        PaginanoencontradaComponent,
        NavbarComponent,
        PieComponent
    ],
    exports: [
        PaginanoencontradaComponent,
        NavbarComponent,
        PieComponent
    ]
})
export class CompartidoModule {
}
