import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { RegistroService } from '../servicios/registro.service';
import { AlertsService } from 'angular-alert-module';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

	log(x) {console.log(x); }

    studentUser: any = {profile:{gender:"M"},password:"",id_status:"1"};
	passwordRepetition: string = "";
	maxDate: string = "";
	minDate: string = "";


  constructor(private alertCtrl: AlertsService,
				/*private toastCtrl: ToastController,*/
				private restProvider: RegistroService
) {}

  ngOnInit() {
		this.obtenerMaxDate();
	}

	obtenerMaxDate() {
		var time = formatDate(Date(),"yyyy-MM-dd","EN");
		var splittedTime = time.split("-");
		splittedTime[0] = String(Number(splittedTime[0])-18);
		this.maxDate = splittedTime.join("-");
		splittedTime[0] = String(Number(splittedTime[0])-92);
		this.minDate = splittedTime.join("-");
	}

	registrarEstudiante() {
		if(this.ingresoValido()){
			console.log(this.studentUser);
			
			this.restProvider.registerStudent(this.studentUser)
			.then(data => {
				this.alertCtrl.setMessage("Se ha registrado correctamente",".");
				window.alert("Se ha registrado correctamente.");
				
			},err => {
				console.log(err);
				this.alertCtrl.setMessage("Ha ocurrido un error al intentar contactar al servidor",".");
				window.alert("Ha ocurrido al intentar contactar al servidor");
			});
			
		} else {
			this.alertCtrl.setMessage("Corrija todos los errores.","3000");
			window.alert("Corrija todos los errores.");
		}
		console.log(this.studentUser);
	}

	capturarGenero(value) {
		this.studentUser.profile.gender = value; 
	}

	ingresoValido(): boolean {
		var mensaje: string = "Hay los siguientes errores en su ingreso de datos:"
		var valido: boolean = true;
		console.log(this.passwordRepetition);
		console.log(this.studentUser.password);
		if (this.passwordRepetition == "" || this.studentUser.password == "") {
			mensaje = mensaje + "\n- No ha ingresado contraseñas válidas.";
			valido = false;

		}
		else if (this.passwordRepetition != this.studentUser.password) {
			mensaje = mensaje + "\n- Las contraseñas ingresadas no coinciden.";
			valido = false;
		}

		if (this.studentUser.email == "") {
			mensaje = mensaje + "\n- Debe ingresar un e-mail.";
			valido = false;
		}


		if (!valido){
			this.alertCtrl.setMessage(mensaje,".");
		}

		return valido;
	}

	



}
