import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { RouterModule } from '@angular/router';
import { CoursesRoutingModule } from './courses-routing.module';
import { MaterialModule } from '../material/material.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoursesRoutingModule,
    MaterialModule, 
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
