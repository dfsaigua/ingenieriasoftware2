import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-videoconferencia',
  templateUrl: './videoconferencia.component.html',
  styleUrls: ['./videoconferencia.component.css']
})
export class VideoconferenciaComponent implements OnInit {

  private subject: any;
  public imgResults: any;
  public query: any;

  constructor(private wsService: WebsocketService) {}

  private loadImageResults(response): void {
    console.log(response.type);
    console.log(response.query);

    this.imgResults = response.images;
  }

  ngOnInit() {
    this.subject = this.wsService
      .connect('ws://192.168.100.9:8000/ws/communication/1/');
    // On reply load images, on error and exit, log it;
    this.subject
      .subscribe(
        (msg) => this.loadImageResults(msg),
        (err) => console.log(err),
        () => console.log('complete')
      );
  }

  public imageSearch(value: string): void {
    if (value && value.trim()) {
        const request: any = {
            command: 'session.image_search',
            text: value.trim()
        };
        this.wsService.send(request);
    }
  }


}
