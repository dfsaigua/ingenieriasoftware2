import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-platprincipal',
  templateUrl: './platprincipal.component.html',
  styleUrls: ['./platprincipal.component.css']
})
export class PlatprincipalComponent implements OnInit {
  data: any;
  private req: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // localStorage.key(4);
    const id = localStorage.getItem('id');

    this.http
      .get(
        'https://xaandrad.pythonanywhere.com/api/student_users/' +
          id +
          '/courses/'
      )
      .subscribe(data => {
        console.log(data);

        this.data = data as [any];
      });
  }
}
