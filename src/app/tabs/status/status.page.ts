import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { PhotoService } from '../../services/photo.service';
import { PlatformService } from '../../services/platform/platform.service';
import { AuthGuardService } from '../../services/route-guard';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(
    public platformService: PlatformService,
    public photoService: PhotoService,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {}
}
