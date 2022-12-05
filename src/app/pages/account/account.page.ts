import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { PhotoService } from '../../services/photo.service';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    public platformService: PlatformService,
    public photoService: PhotoService,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
