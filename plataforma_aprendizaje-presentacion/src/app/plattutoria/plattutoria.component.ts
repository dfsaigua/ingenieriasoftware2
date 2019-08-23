
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-plattutoria',
  templateUrl: './plattutoria.component.html',
  styleUrls: ['./plattutoria.component.css']
})
export class PlattutoriaComponent implements OnInit {
  data: any;
  private req: any;
  constructor(private http: HttpClient) {}

  filterPostt = '';
  ngOnInit() {
    this.http.get('https://xaandrad.pythonanywhere.com/api/tutorship_schedules/').subscribe(data => {
        console.log(data);
        this.data = data as [any];
    });
  }

}

