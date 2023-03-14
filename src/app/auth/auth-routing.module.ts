import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MainComponent } from './components/main/main.component';

const routes : Routes = [
  {
  
  path:"",
  children: [
  { path:"login", component: LoginComponent},{ path:"registro", component:RegistroComponent},
  { path:"**", redirectTo:"login"}
]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
