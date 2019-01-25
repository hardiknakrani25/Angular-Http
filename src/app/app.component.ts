import { Component } from '@angular/core';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];


  constructor(public serverService: ServerService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  addOnServer() {
this.serverService.storeServer(this.servers).subscribe(
  (resolve) => console.log(resolve),
  (error) => console.log(error)
);
  }


  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
