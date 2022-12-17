import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { PhotoService } from '../../services/photo.service';
import { PlatformService } from '../../services/platform/platform.service';
import { ServerConnect } from '../../services/server-connect.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    public platformService: PlatformService,
    public photoService: PhotoService,
    public auth: AuthenticationService,
    public dataService: ServerConnect
  ) { }

  ngOnInit() {
  }

}
