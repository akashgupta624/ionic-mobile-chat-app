import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { App } from '@capacitor/app';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './auth.service';
import { ServerConnect } from './server-connect.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private androidPermissions: AndroidPermissions,
  private statusBar: StatusBar,
  private splashScreen: SplashScreen,
  private authService: AuthenticationService,
  private dataService: ServerConnect) {
}

initApp(): void {
  App.addListener('appStateChange', ({ isActive }) => {
    console.log('App state changed. Is active?', isActive);
    if (isActive) {
      //this.authService.loadFormData(today).then(() => {
        this.dataService.userOnline();
        this.dataService.getNotifications();
      //});
    } else {
      this.dataService.userInactive();
    }
  });
  
  App.addListener('appUrlOpen', data => {
    console.log('App opened with URL:', data);
    this.splashScreen.hide();
  });
  
  // App.addListener('appRestoredResult', data => {
  //   this.dataService.userOffline();
  // });

  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
    result => {console.log('Has permission?',result.hasPermission);this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)},
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  );
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
    result => {console.log('Has permission?',result.hasPermission);this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)},
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
  );
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(
    result => {console.log('Has permission?',result.hasPermission);this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_CONTACTS)},
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_CONTACTS)
  );
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_CONTACTS).then(
    result => {console.log('Has permission?',result.hasPermission);this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_CONTACTS)},
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_CONTACTS)
  );
  PushNotifications.requestPermissions().then(result => {
    if (result.receive === 'granted') {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      // Show some error
    }
  });

  PushNotifications.addListener('registration', (token: Token) => {
    //alert('Push registration success, token: ' + token.value);
    this.authService.form.deviceToken = token.value;
  });

  PushNotifications.addListener('registrationError', (error: any) => {
    alert('Error on registration: ' + JSON.stringify(error));
  });

  PushNotifications.addListener(
    'pushNotificationReceived',
    (notification: PushNotificationSchema) => {
      alert('Push received: ' + JSON.stringify(notification));
    },
  );

  PushNotifications.addListener(
    'pushNotificationActionPerformed',
    (notification: ActionPerformed) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    },
  );
  this.statusBar.styleDefault();
  Keyboard.setAccessoryBarVisible({isVisible: false}).then(() => {});
  Keyboard.setResizeMode({mode: KeyboardResize.Body}).then(() => {});
  this.splashScreen.show();
}
  
}
