import { Component, OnInit } from '@angular/core';
import * as auth from 'firebase/auth';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { AuthenticationService } from '../../services/auth.service';
import { WindowService } from '../../services/window.service';
import { countryCodes } from '../../services/country-codes.modal';
import { Router } from '@angular/router';
import { ServerMessage } from '../../services/message.modal';
import { ServerConnect } from '../../services/server-connect.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private windowRef: any;
  public countries = countryCodes;
  public countryCode: string = '';
  public showVerify: boolean = false;
  constructor(private sms: SMS,
    public authService: AuthenticationService,
    public win: WindowService,
    private dataService: ServerConnect,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    // this.platform.ready().then(() => {
    //   this.sms.send('8586906308', 'Hello world! ' + ' ' + 1234);
    // })
    this.authService.requestPermission();
  }

  public onClick(data: any): void {
    this.authService.SignIn();
  }

  public onInput(data): void {
    this.authService.form.phone = data.target.value;
    if (this.authService.form.phone.length === 10 && this.countryCode) {
      this.initCaptcha();
    }
  }

  public onIonChange(value): void {
    this.countryCode = value;
    if (this.authService.form.phone.length === 10 && this.countryCode) {
      this.initCaptcha();
    }
  }

  private initCaptcha(): void {
    const au = auth.getAuth();
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('captcha',
    {
      size: 'hidden',
      callback: (response) => {
        if (this.authService.form.phone.length === 10 && this.countryCode) {
          const appVerifier = this.windowRef.recaptchaVerifier;
          this.authService.signInWithPhoneNumber(appVerifier, this.countryCode + this.authService.form.phone).then(
            success => {
              this.showVerify = true;
            }
          );
          return;
        }
      },
      'expired-callback': () => {
        this.showVerify = false;
      }
    },
    au
    )
    this.windowRef.recaptchaVerifier.render();
  }
  verifyLoginCode() {
    this.authService.showLoader = true;
    this.authService.enterVerificationCode(this.authService.form.otp).then(
      success => {
        let msg: ServerMessage = new ServerMessage('subscribe', 'verifyUser', this.authService.form.phone);
        this.dataService.socket$.emit('subscribe', msg, async (data) => {
          this.authService.showLoader = false;
          if(data.subscriptionType === 'Success') {
            this.authService.form.freshLogin = true;
            this.router.navigate(['/register']);
          }
          else if(data.subscriptionType === 'AlreadyExist') {
            this.authService.form = data.result;
            this.authService.showLoader = false;
            const alert = await this.alertController.create({
              header: 'Success',
              subHeader: 'Account Already Exist',
              message: 'Logging in with the same account...',
              buttons: ['OK'],
            });
        
            await alert.present();
            this.authService.formData$.next(data.result);
            this.router.navigate(['/tabs']);
          }
          else {
            const alert = await this.alertController.create({
              header: 'Error',
              subHeader: 'Something went wrong',
              message: 'Try again later',
              buttons: ['OK'],
            });
        
            await alert.present();
          }
        });
      }
    )
  }

}
