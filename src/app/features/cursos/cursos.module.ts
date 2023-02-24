import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/tabla/cursos.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BooleanoEstiloDirective } from './cursos/directive/estilo-booleano.directive';
import { BooleaPipe } from './pipe/boolean.pipe';




@NgModule({
  declarations: [
    CursosComponent,
    BooleanoEstiloDirective,
    BooleaPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CursosModule { }
