import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioComponent,
    NoEncontradoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule
  ]
})
export class CoreModule { }
