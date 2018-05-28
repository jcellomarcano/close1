import {Injectable} from "@angular/core";

@Injectable()
export class UsuariosService{
    nusuarios:any = [
        {id: 1, username: 'jmarcano', email:'jmarcano.citywallet@gmail.com', phone: 4248197060, password: 'anitalavalatina'},

    ];

    public getUsuarios(){

       return this.nusuarios;
    }

    public buscarUsuario(username){
        return this.nusuarios.find((user) => {return user.username == username})
    }

    public guardarUser(user){
        console.log(user)
    }


    /**debo crear un constructor para obtener una funcion dentro de cognito para hacer registo y login
     * aunado a esto debo importar las librerias de cognito
     *
     * Puede ser algo como
     *
     * constructor(private variableDeEntorno: ElComponenteDeDonde Importo){}
     */
}