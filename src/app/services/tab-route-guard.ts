import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from './auth.service';
import { ServerConnect } from './server-connect.service';
 
 
@Injectable({
    providedIn: 'root',
  })
export class TabAuthGuardService implements CanActivate {
 
    constructor(private _router:Router ,
        private auth: AuthenticationService,
        private dataService: ServerConnect) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        // if (this.auth.isLoggedIn)  {
        //     let date = new Date();
        //     let today = (this.dataService.day[date.getDay()] + " " + date.getDate() + " " + this.dataService.month[date.getMonth()] + " " + date.getFullYear());
        //     this.auth.loadFormData(today).then(() => {
        //         this.dataService.getContacts();
        //         return true;
        //     });
        // }
        return true;
    }
 
}