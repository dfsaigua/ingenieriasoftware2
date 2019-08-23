import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { HttpClientModule} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  apiUrl = "https://xaandrad.pythonanywhere.com/";
  constructor(private http: HttpClient) {}

  registerStudent(estudiante) {
    return new Promise ((resolve,reject) => {
      this.http.post(this.apiUrl+"api/student_users/",estudiante).subscribe(data => {
        resolve(data);
      },err => {
        reject(err);
      })
    });
  }






}  