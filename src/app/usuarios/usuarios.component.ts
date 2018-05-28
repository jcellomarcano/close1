import {Component} from "@angular/core";
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector:'app-usuarios',
  templateUrl: './usuarios.component.html'
})

export class UsuariosComponent {
    dataUsuario: any = {};
    constructor(private usuariosService: UsuariosService){

    }

    guardarUser(){
        this.usuariosService.guardarUser(this.dataUsuario);
    }


}
