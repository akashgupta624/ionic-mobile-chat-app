import { Injectable } from '@angular/core';
import { Config, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private config: Config,
    private platform: Platform
  ) {
    console.log("Mode :- ", this.config.get('mode'));
    console.log("Hybrid Platform :- ",  this.platform.is('hybrid'));
   }

  get isIOS(): boolean {
    return this.config.get('mode') === 'ios'; 
  }

  get isAndroid(): boolean {
    return this.config.get('mode') === 'android' || this.config.get('mode') === 'md';
  }

  get isHybrid(): boolean {
    return this.config.get('mode') === 'md' || this.platform.is('hybrid');
  }
}
