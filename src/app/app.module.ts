import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentPageComponent } from './features/students/student-page/student-page.component';
import { StudentDialogComponent } from './features/students/student-dialog/student-dialog.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    StudentDialogComponent,
    StudentPageComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule,
    
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
