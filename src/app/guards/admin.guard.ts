import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from '../core/models/sesion';
import { SesionService } from '../core/services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private sesion:SesionService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map( (sesion:Sesion) => {
        if(sesion.usuarioActivo?.esAdmin){
          return true
        }
        else{return false}
      } )
    )
  }
  
}
