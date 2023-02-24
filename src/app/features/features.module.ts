import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosModule } from './cursos/cursos.module';
import { StudentsModule } from './students/students.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosModule,
    StudentsModule, 
    MaterialModule
  ],
  exports:[
    CursosModule,
    StudentsModule
  ]
})
export class FeaturesModule { }
