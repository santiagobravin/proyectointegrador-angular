import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';


const routes : Routes = [
  {
  
    path:"",

    children: [

      {path:"listar", component:CoursesPageComponent}
      
    ]
  }
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
