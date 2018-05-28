import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector:'app-detalle',
  templateUrl: 'detalle.component.html',
    styleUrls: ['./detalle.component.css']
})

export class DetalleComponent {

    username = null;
    user: any = {};
    constructor(private route: ActivatedRoute, private usuariosService: UsuariosService){
      console.log(this.route.snapshot.params['username']);
      this.username = this.route.snapshot.params['username'];
      this.user = this.usuariosService.buscarUsuario(this.username);

    }


}

