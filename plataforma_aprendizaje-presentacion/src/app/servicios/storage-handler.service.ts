
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { User } from 'src/app/modelos/User';
import { HttpClientModule, HttpHeaders} from '@angular/common/http'; 
import { LoginService } from '../servicios/login.service';
@Injectable()


export class  StorageHandlerService  {

	key: any;
	id: any;
	isStudent: boolean;
	isTutor: boolean;
	isStaff: boolean;
	

	constructor() {
		
	}
	private localStorage;
	setAll(key,id,isStudent,isStaff,isTutor){
		this.key = key;
		this.id = id;
		this.isStudent = isStudent;
		this.isTutor = isTutor;
		this.isStaff = isStaff;
		this.writeInStorage("key",key);
		this.writeInStorage("id",id);
		this.writeInStorage("isStudent",isStudent);
		this.writeInStorage("isTutor",isTutor);
		this.writeInStorage("isStaff",isStaff); 
	}

	writeInStorage(key: string, value: any) {
		localStorage.setItem(key,value);
	}
		

	private async getValuePromise(key) {
		return await this.localStorage.getItem(key).then(
			data => {
				return data
			});
	} 

	getKey() {
		return this.key;
	}

	setKey(value) {
		this.key = value;
		this.writeInStorage("key",value);
	}

	getId() {
		return this.id;
	}

	setId(value) {
		this.id = value;
		this.writeInStorage("id",value);
	}

	getIsStudent() {
		return this.isStudent;
	}

	setIsStudent(value) {
		this.isStudent = value;
		this.writeInStorage("isStudent",value);
	}

	getIsTutor() {
		return this.isTutor;
	}

	setIsTutor(value) {
		this.isTutor = value;
		this.writeInStorage("isTutor",value);
	}

	getIsStaff() {
		return this.isStaff;
	}

	setIsStaff(value) {
		this.isStaff = value;
		this.writeInStorage("isStaff",value);
	}

	clear() {
		this.key = null;
		this.id = null;
		this.isStaff = null;
		this.isStudent = null;
		this.isTutor = null;
		this.localStorage.clear();
		
		this.getValuePromise('key').then(data => {
			this.key = data;
			console.log(this.key);
		})
		this.getValuePromise('id').then(data => {
			this.id = data;
			console.log(this.id);
		})
	}

}
