import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../models/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  
  formulario!: FormGroup;
  constructor(
    private loginService:LoginService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contraseña: new FormControl(),
      esAdmin: new FormControl(false)
    })
  }

  login(){
    let usuario:Usuario = {
     usuario: this.formulario.value.usuario,
     contraseña: this.formulario.value.contraseña,
     esAdmin: this.formulario.value.esAdmin
    }
    this.loginService.login(usuario)
    this.router.navigate(["inicio"])
  }








}
