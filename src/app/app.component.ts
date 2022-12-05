import { Component, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { ServerConnect } from './services/server-connect.service';
import { AppService } from './services/app.service';
import { ServerMessage } from './services/message.modal';
import { AuthenticationService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private platform: Platform,
    private server: ServerConnect,
    private appService: AppService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let date = new Date();
      let today = (this.server.day[date.getDay()] + " " + date.getDate() + " " + this.server.month[date.getMonth()] + " " + date.getFullYear());
      this.authService.loadFormData(today).then(() => {
        this.server.connect();
        this.appService.initApp();
        this.server.userOnline();
        this.server.getContacts();
        this.authService.receiveMessage();
      });
    });
  }

  ngOnDestroy(): void {
    
  }
}
