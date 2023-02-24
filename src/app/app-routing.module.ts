import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';


import { StudentPageComponent } from './features/students/student-page/student-page.component';
import { CursosComponent } from './features/cursos/cursos/tabla/cursos.component';

const routes : Routes = [

  {
  path: "",
  component:DashboardLayoutComponent,
  children: [
    {
      path: "students",
      component: StudentPageComponent
    },

    {
      path: "cursos",
      component: CursosComponent

    }
  ]
  },

  {
    path:"auth",
    children: [
      {
        path:"login"
      },
      {
        path:"registro"
      }
    ]
  }



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
