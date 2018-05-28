import {Injectable} from "@angular/core";


import {environment} from "../../environments/environment"



declare let AWS: any;
declare let AWSCognito: any;
declare let apigClientFactory: any;
@Injectable()
export class CognitoLoginService{

    userPool: any={};



    public logIN = (username, password) => {

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

        var authenticationData = {
            Username : username,
            Password : password
        };

        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

        cognitoUser.authenticateUser(authenticationDetails, {

            onSuccess: function (result) {
                alert('authentication successful!');
                console.log(result);
            },

            onFailure: function(err) {
                console.log(err);
                alert(err);
            },

            mfaRequired: function(codeDeliveryDetails) {
                var verificationCode = prompt('Please input verification code' ,'');
                cognitoUser.sendMFACode(verificationCode, this);
            }

        });

    }

}