import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentDialogComponent,
    StudentPageComponent,
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule,
    StudentRoutingModule,
    RouterModule
  ]
})
export class StudentsModule { }
