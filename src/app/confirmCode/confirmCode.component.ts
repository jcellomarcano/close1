import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {AutorizacionService} from "../services/autorizacion.service";
import {CognitoRegistoService} from "../services/cognito-registo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './confirmCode.component.html',
  styleUrls: ['./confirmCode.component.css']
})
export class ConfirmCodeComponent implements OnInit {

    username = null;

    dataConfirm: any ={};

    constructor(private route: ActivatedRoute, private cognitoRegistroService: CognitoRegistoService) {
        console.log(this.route.snapshot.params['username']);
        this.username = this.route.snapshot.params['username'];

    }


    confirmarUsuario(){
        this.cognitoRegistroService.confirmCode(this.dataConfirm.code, this.username);
    }


    ngOnInit(): void {
    }

}
