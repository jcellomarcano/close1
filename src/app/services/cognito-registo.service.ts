import {Injectable} from "@angular/core";

import {environment} from "../../environments/environment"
declare let AWS: any;
declare let AWSCognito: any;
declare let apigClientFactory: any;
@Injectable()

export class CognitoRegistoService{

    userPool: any={};

    public singUP =(username, password, email, tlf, nombre, apellido, dateBirth)=>{
        var poolData = { UserPoolId : environment.userPoolId,
            ClientId : environment.clientId
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var attributeList = [];

        var dataEmail = {
            Name : 'email',
            Value : email
        };
        var dataPhoneNumber = {
            Name : 'phone_number',
            Value : tlf
        };

        var dataName = {
            Name: 'name',
            Value: nombre
        };

        var dataLastname = {
            Name: 'family_name',
            Value: apellido
        };

        var dataNickname = {
            Name: 'nickname',
            Value: username
        };

        var dataBirthdate = {
            Name: 'birthdate',
            Value: dateBirth
        };


        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
        var attributeNombre = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
        var attributeNickname = new AmazonCognitoIdentity.CognitoUserAttribute(dataNickname);
        var attributeLastname = new AmazonCognitoIdentity.CognitoUserAttribute(dataLastname);
        var attributeBirthdate = new AmazonCognitoIdentity.CognitoUserAttribute(dataBirthdate);

        attributeList.push(attributeEmail);
        attributeList.push(attributePhoneNumber);
        attributeList.push(attributeNombre);
        attributeList.push(attributeNickname);
        attributeList.push(attributeLastname);
        attributeList.push(attributeBirthdate);

        userPool.signUp(username , password, attributeList, null, function(err, result){
            if (err) {
                alert(err);
                return;
            }
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
        });
    }

    public confirmCode(code, username){

        let poolData = {
            UserPoolId: environment.userPoolId, // Your user pool id here
            ClientId: environment.clientId // Your client id here
        };

        this.userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

        var userData = {
            Username : username,
            Pool : this.userPool
        };

        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

        cognitoUser.confirmRegistration(code, true, function(err, result) {
            if (err) {
                alert(err);
                return;
            }
            console.log('call result: ' + result);
        });
    }

}

