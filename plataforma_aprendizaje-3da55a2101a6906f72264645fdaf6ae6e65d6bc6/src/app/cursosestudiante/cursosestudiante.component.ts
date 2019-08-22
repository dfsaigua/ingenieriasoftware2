import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cursosestudiante',
  templateUrl: './cursosestudiante.component.html',
  styleUrls: ['./cursosestudiante.component.css']
})
export class CursosestudianteComponent implements OnInit {

  data: any
  private req: any
  constructor(private http: HttpClient) {}


  ngOnInit() {
    
    // localStorage.key(4);
    var id =localStorage.getItem('id');
  	this.http.get('https://xaandrad.pythonanywhere.com/api/student_users/'+id+'/courses/').subscribe(data => {
        console.log(data);
         

     
         this.data = data as [any]

          });


}
}
