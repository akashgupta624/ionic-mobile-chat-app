import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { PhotoService } from '../../services/photo.service';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  public isSearchMode = false;
  constructor(
    public platformService: PlatformService,
    public photoService: PhotoService,
    public auth: AuthenticationService
  ) { }

  segmentChanged(event) {
    console.log(event);
  }

  ngOnInit() { }

  onSearch(value): void {
    
  }
}
