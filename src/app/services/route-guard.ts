import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from './auth.service';
 
 
@Injectable({
    providedIn: 'root',
  })
export class AuthGuardService implements CanActivate {
 
    constructor(private _router:Router ,
        private auth: AuthenticationService) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        if (this.auth.isLoggedIn)  {
            
            this._router.navigate(['/tabs']);
            return false;
        }
        // Preferences.set({
        //   key: 'form',
        //   value: JSON.stringify(this.auth.form)
        // });
        return true;
    }
 
}