

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServer(servers: any) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular-http-a264a.firebaseio.com/data.json', servers, {headers : headers});
  }
}
