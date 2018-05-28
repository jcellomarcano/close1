import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {AutorizacionService} from "../services/autorizacion.service";
import {CognitoRegistoService} from "../services/cognito-registo.service";
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {


    registro: any = {};
    //user: any = {};

    constructor(private autorizacionService: AutorizacionService, private usuariosService: UsuariosService, private cognitoRegistroService:CognitoRegistoService) {


    }

    registroEnCognitoUser(){
        this.cognitoRegistroService.singUP(this.registro.username,this.registro.password ,this.registro.email, this.registro.phone.toString(), this.registro.name, this.registro.lastname, this.registro.birthdate);
    }

    registrarUsuario(){
            this.autorizacionService.singup( this.registro.username, this.registro.email, this.registro.number,this.registro.password);
    }


    guardarUser(){
        this.usuariosService.guardarUser(this.registro);
    }

}
