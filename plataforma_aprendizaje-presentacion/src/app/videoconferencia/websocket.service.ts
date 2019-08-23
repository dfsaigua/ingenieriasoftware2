
import {Injectable} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {webSocket} from 'rxjs/webSocket';



// We need @injectable if we want to use http
@Injectable()
export class WebsocketService {
  private ws: any;

  constructor() { }

  public get(): any {
    return this.ws;
  }

  public send(response: any): void {
    this.ws.next(response);
  }

  public connect(sockURL: string): any {
    this.ws = webSocket(sockURL);
    return this.ws;
  }

}
