import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './core/inicio/inicio.component';
import { NoEncontradoComponent } from './core/no-encontrado/no-encontrado.component';
import { SesionGuard } from './guards/sesion.guard';

  const routes : Routes = [

    {

    path:"inicio", canActivate: [SesionGuard],
    component:InicioComponent

    },

    {
      path:"auth",
      
      loadChildren: ()=> import("./auth/auth.module").then(m=>m.AuthModule)
    },

    {
      path:"alumnos",
      
      loadChildren: ()=> import("./students/students.module").then(m=>m.StudentsModule)
    },

    {
      path:"cursos",

      loadChildren: ()=> import("./courses/courses.module").then(m =>m.CoursesModule)

    },
    
    {path:"", redirectTo:"inicio", pathMatch:"full"},
    {path:"**", component:NoEncontradoComponent}
    
   
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
    
  ]
})
export class AppRoutingModule { }
