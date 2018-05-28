import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {AutorizacionService} from "../services/autorizacion.service";
import {CognitoLoginService} from "../services/cognito-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    ingreso: any ={};

    constructor(private autorizacionService: AutorizacionService, private usuariosService: UsuariosService, private cognitoLoginService: CognitoLoginService) {
        this.autorizacionService.login(this.ingreso.username, this.ingreso.password);

    }

    getUser(){
        this.usuariosService.guardarUser(this.ingreso)
    }

    ingresoUser(){
        this.cognitoLoginService.logIN(this.ingreso.username, this.ingreso.password)
    }

    callbackIngresoUserCognito(mensaje){
        console.log(mensaje)
    }


    ngOnInit(): void {
    }

}
