import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 
import 'rxjs/add/operator/map';
import { StorageHandlerService } from '../servicios/storage-handler.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { PerfilService } from '../servicios/perfil.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  person: any = {profile:{}}
  modifiedPerson: any = {profile:{}}
  modificar = false;
  maxDate: string = "";
  minDate: string = "";



constructor(private restProvider: PerfilService,
        private alertCtrl: AlertsService,
        private router: Router) {
  }

  ngOnInit() {
    this.getPersonInformation();
  }

  obtenerMaxDate() {
    var time = formatDate(Date(),"yyyy-MM-dd","EN");
    var splittedTime = time.split("-");
    splittedTime[0] = String(Number(splittedTime[0])-18);
    this.maxDate = splittedTime.join("-");
    splittedTime[0] = String(Number(splittedTime[0])-92);
    this.minDate = splittedTime.join("-");
  }

  getPersonInformation() {
    this.restProvider.getPersonInformation().then(data => {
      this.person = data;
      this.modifiedPerson = data;
      console.log(this.person);
     
    }, err => {
       window.alert("Ha ocurrido un error.")
    })
  }

  /*async showAlert(mensaje) {
    const alert = await this.alertCtrl.create({
      header: "Sistema",
      message: mensaje,
      buttons: ["OK"]
    });
    await alert.present();
  } */

  cambiarModificar() {
    if (this.modificar) this.modifiedPerson = this.person;
    this.modificar = !this.modificar;
        //console.log("¿Son iguales?: " + this.person === this.modifiedPerson);
  }

  modificarDatos() {

    if (this.ingresoValido()) {
      const envio = {
        'id': this.modifiedPerson.id,
        'email': this.modifiedPerson.email,
        'photo': this.modifiedPerson.photo,
        'id_status': this.modifiedPerson.status.id,
        'profile': this.modifiedPerson.profile
      }
      this.restProvider.updatePersonalData(envio).then(data => {
        window.alert("Actualización de datos hecha correctamente");
        this.modificar = false;
      }, err => {
        window.alert("Ocurrió un error al intentar actualizar los datos. Asegúrese de ingresar valores válidos.");
        console.log(err);
      })
    }

    
  }

  ingresoValido(): boolean {
    var mensaje: string = "Hay los siguientes errores en su ingreso de datos:"
    var valido: boolean = true;
    
    if (this.modifiedPerson.email == "") {
      mensaje = mensaje + "<br/>- Debe ingresar un e-mail.";
      valido = false;
    }

    if (this.modifiedPerson.profile.dob == "") {
      mensaje = mensaje + "<br/>- Debe ingresar una fecha de nacimiento.";
      valido = false;
    }

    if (this.modifiedPerson.profile.phone == "") {
      mensaje = mensaje + "<br/>- Debe ingresar un número de teléfono.";
      valido = false;
    }

    if (this.modifiedPerson.profile.address == "") {
      mensaje = mensaje + "<br/>- Debe ingresar una dirección de domicilio.";
      valido = false;
    }

    if (this.modifiedPerson.profile.names == "") {
      mensaje = mensaje + "<br/>- Debe ingresar al menos un nombre válido.";
      valido = false;
    }

    if (this.modifiedPerson.profile.last_names == "") {
      mensaje = mensaje + "<br/>- Debe ingresar al menos un apellido válido.";
      valido = false;
    }

    if (!valido){
      window.alert(mensaje);
    }

    return valido;
  }


 Logout() {
    localStorage.clear();
    this.router.navigate(['/principal']);
  }


}

