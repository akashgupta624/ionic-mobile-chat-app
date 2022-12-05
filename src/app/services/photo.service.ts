import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from './auth.service';
import { PlatformService } from './platform/platform.service';

@Injectable({
    providedIn: 'root'
  })
  export class PhotoService {
    private platform: Platform;

    constructor(platform: Platform,
      private platformService: PlatformService,
      private authService: AuthenticationService) {
      this.platform = platform;
    }

    public async addNewToGallery() {
        return new Promise<any>((resolve, reject) => {
            Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: this.platform.is('hybrid') ? CameraSource.Prompt: CameraSource.Photos,
                quality: 100,
                allowEditing: true,
            }).then(async (result) => {
            console.log(result);
            const capturedPhoto = result;
            const prefix = "data:image/png;base64,";
            const base64 = await this.readAsBase64(capturedPhoto);
            this.authService.form.profilePicture = prefix + base64;
            resolve(result);
            }).catch((error) => {
            reject(error.message);
            });
        });
    }

      private async readAsBase64(photo: Photo) {
        // "hybrid" will detect Cordova or Capacitor
        if (this.platform.is('hybrid')) {
          // Read the file into base64 format
          const file = await Filesystem.readFile({
            path: photo.path
          });
      
          return file.data;
        }
        else {
          // Fetch the photo, read as a blob, then convert to base64 format
          const response = await fetch(photo.webPath);
          const blob = await response.blob();
      
          return await this.convertBlobToBase64(blob) as string;
        }
      }
      
      private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
      });
      
  }