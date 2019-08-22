import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { StorageHandlerService } from '../servicios/storage-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  apiUrl = "https://xaandrad.pythonanywhere.com/"

	constructor(public http: HttpClient, private storage: StorageHandlerService ) {
		
	}

	headerAuthorization(){
		const header = {
			'Authorization': 'Token ' + this.storage.getKey()
		};
		return new HttpHeaders(header);
	}

getPersonInformation() {
		return new Promise((resolve,reject) => {
			var id =localStorage.getItem('id');
			console.log(id);
			var isStudent =localStorage.getItem('isStudent');
			console.log(isStudent);
			var isTutor =localStorage.getItem('isTutor');
			console.log(isTutor);
			//console.log(this.storage.getIsStudent());
			//console.log(this.storage.getIsTutor());
			if (isStudent){
				this.http.get(this.apiUrl+`api/student_users/${id}`,
				{headers: this.headerAuthorization()}).subscribe(data => {
					resolve(data);
				}, err => {
					reject(err);
				})
			} else if (isTutor){
				this.http.get(this.apiUrl+`api/tutor_users/${id}`,
				{headers: this.headerAuthorization()}).subscribe(data => {
					resolve(data);
				}, err => {
					reject(err);
				})
			}
			
		});
	}

updatePersonalData(info) {
	       var id =localStorage.getItem('id');
			console.log(id);
			var isStudent =localStorage.getItem('isStudent');
			console.log(isStudent);
			var isTutor =localStorage.getItem('isTutor');
			console.log(isTutor);
		return new Promise((resolve,reject) => {
			if (isStudent){

				this.http.put(
					this.apiUrl+`api/student_users/${id}/`,
					info,
					{headers: this.headerAuthorization()}).subscribe(data => {
						resolve(data);
					}, err => {
						reject(err);
					})
			} else if (isTutor) {
				this.http.put(
					this.apiUrl+`api/tutor_users/${id}/`,
					info,
					{headers: this.headerAuthorization()}).subscribe(data => {
						resolve(data);
					}, err => {
						reject(err);
					})
			}
		});
	}



updateProfile(profile) {
		return new Promise((resolve,reject) => {
			this.http.put(
				this.apiUrl+`api/profiles/${profile.id}/`,
				profile,
				{headers: this.headerAuthorization()}).subscribe(data => {
					resolve(data);
				}, err => {
					reject(err);
				})
		})
	}

}
