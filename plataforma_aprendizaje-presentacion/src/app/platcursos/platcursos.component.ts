
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-platcursos',
  templateUrl: './platcursos.component.html',
  styleUrls: ['./platcursos.component.css']
})
export class PlatcursosComponent implements OnInit {
  data: any;
  private req: any;
  constructor(private http: HttpClient) {}

  filterPost = '';
  ngOnInit() {
    this.http.get('https://xaandrad.pythonanywhere.com/api/courses/').subscribe(data => {
        console.log(data);
        this.data = data as [any];
    });
  }

}

