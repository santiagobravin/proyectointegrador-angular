import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { CommonModule } from '@angular/common';
import { SesionGuard } from '../guards/sesion.guard';

const routes : Routes = [
  {
  path: "", canActivateChild:[SesionGuard] ,

  children: [
    {path:"listar", component:StudentPageComponent},
    {path: ":id", component:StudentCardComponent}
  ]
  }
]
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class StudentRoutingModule { }
