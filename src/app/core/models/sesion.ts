import { Usuario } from "src/app/auth/models/usuarios";

export interface Sesion {
    sesionActiva : boolean;
    usuarioActivo?: Usuario
}