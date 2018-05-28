import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup.component';
import { FormsModule } from '@angular/forms';
import { ResaltarDirective } from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {Routes, RouterModule} from "@angular/router";
import {DetalleComponent} from "./detalle/detalle.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import {UsuariosService} from "./services/usuarios.service";
import {HttpModule} from "@angular/http";
import {AutorizacionService} from "./services/autorizacion.service";
import {CognitoRegistoService} from "./services/cognito-registo.service";
import {CognitoLoginService} from "./services/cognito-login.service";
import {ConfirmCodeComponent} from "./confirmCode/confirmCode.component";
//import { UserFormComponent } from './user-form/user-form.component';
//import {CognitoUtil} from "./services/cognito.service";
//import {AwsUtil} from "./services/aws.service";


const appRoutes: Routes = [
    {path:'', component: AppComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'detalle/:username', component: DetalleComponent},
    {path:'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'singup', component: SingupComponent},
    {path: 'confirm/:username', component: ConfirmCodeComponent}
];
//import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    UsuariosComponent,
    ContactoComponent,
    LoginComponent,
    ConfirmCodeComponent
      //UserFormComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      UsuariosService,
      AutorizacionService,
      CognitoRegistoService,
      CognitoLoginService
      //CognitoUtil,
      //AwsUtil,
      ],

  bootstrap: [AppComponent]
})
export class AppModule { }
