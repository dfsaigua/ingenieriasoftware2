import { Component } from '@angular/core';
// import { AlertController} from 'ionic-angular';
import { LoginService } from '../servicios/login.service';
// import { Storage } from '@ionic/storage';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AlertsModule } from 'angular-alert-module';
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage
} from 'angular-web-storage';
// import { HomePage } from '../home/home';
import { AlertsService } from 'angular-alert-module';
// import { StorageHandler } from 'src/app/storageHandler';
import { StorageHandlerService } from '../servicios/storage-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {};

  constructor(
    private router: Router,
    public restProvider: LoginService,
    private storage: LocalStorageService,
    public alertCtrl: AlertsService,
    public alert2: AlertsService,
    private st: StorageHandlerService
  ) {}

  iniciarSesion(event, item) {
    this.restProvider.login(this.user).then(
      data => {
        this.storage.set('key', data);
        this.st.setAll(
          JSON.parse(JSON.stringify(data)).key,
          JSON.parse(JSON.stringify(data)).id,
          JSON.parse(JSON.stringify(data)).is_student,
          JSON.parse(JSON.stringify(data)).is_staff,
          JSON.parse(JSON.stringify(data)).is_tutor
        );
        this.alert2.setMessage('Correcto', 'Sesión iniciada correctamente');
        console.log('Sesión iniciada correctamente');
        // this.navCtrl.setRoot(HomePage);

        this.router.navigate(['/platprincipal']);
      },
      err => {
        console.log('Su correo o su contraseña son incorrectos.');
        window.alert('Su correo o su contraseña son incorrectos.');
        this.alertCtrl.setMessage(
          'Su correo o su contraseña son incorrectos.',
          'Vuelva a ingresarlos.'
        );
      }
    );
  }

  
}
