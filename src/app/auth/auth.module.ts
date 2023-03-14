import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
