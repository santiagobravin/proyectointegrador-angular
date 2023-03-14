import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { SesionGuard } from '../guards/sesion.guard';


const routes : Routes = [
  {
  
    path:"", canActivateChild: [SesionGuard],

    children: [

      {path:"listar", component:CoursesPageComponent},
      {path: ":id", component: CoursesCardComponent}
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
