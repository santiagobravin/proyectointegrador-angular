import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from '../models/usuarios';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion:SesionService
  ) { }

  login(usuario : Usuario){
    /*Esta sería la forma de mantener la sesión activo con herramientas propias de Js.
        localStorage.setItem("sesionActiva", JSON.stringify(usuario))*/

      let sesion : Sesion = {
        sesionActiva : true,
        usuarioActivo : usuario
      }
      this.sesion.crearSesion(sesion);

  }
}
