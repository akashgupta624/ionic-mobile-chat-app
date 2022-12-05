import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { PhotoService } from '../../services/photo.service';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(
    public platformService: PlatformService,
    public photoService: PhotoService,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
