import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { User } from 'src/app/modelos/User';
import { HttpClientModule, HttpHeaders} from '@angular/common/http'; 
import { StorageHandlerService } from '../servicios/storage-handler.service';


@Injectable()
export class LoginService {

  apiUrl = "https://xaandrad.pythonanywhere.com/"
  key: any;
  


  constructor(public http: HttpClient, private sto:  StorageHandlerService) {
		
	}



  headerAuthorization(){
		const header = {
			'Authorization': 'Token ' + this.sto.getKey()
		};
		return new HttpHeaders(header);
	}

	login(user) {
		return new Promise((resolve,reject) => {
			this.http.post(this.apiUrl+'authenticate/', user).subscribe(data => {
				resolve(data);
				console.log(data);
			}, err => {
				reject(err);
				console.log(err);
			});
		});
	}

 


  
}



