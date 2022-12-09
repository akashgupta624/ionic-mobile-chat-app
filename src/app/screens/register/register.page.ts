import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../services/auth.service';
import { ServerMessage } from '../../services/message.modal';
import { PhotoService } from '../../services/photo.service';
import { ServerConnect } from '../../services/server-connect.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public form = {
    name: '',
    status: '',
    email: ''
  }
  constructor(private dataService: ServerConnect,
    private router: Router,
    public photoService: PhotoService,
    public authService: AuthenticationService,
    private alertController: AlertController) { }

  ngOnInit() {
    
  }

  public onClick(data: any) {
    this.authService.showLoader = true;
    this.authService.form.deviceToken = (this.authService.form?.deviceToken)? this.authService.form.deviceToken: 'No Token';
    let msg: ServerMessage = new ServerMessage('subscribe', 'addUserToDatabase', JSON.stringify(this.authService.form));
    this.dataService.socket$.emit('subscribe', msg, async (data) => {
      this.authService.showLoader = false;
      if(data.subscriptionType === 'Success') {
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
    })
  }

  public uploadImage(): void {
    this.photoService.addNewToGallery().then(success => {
      
    })
  }
} 
