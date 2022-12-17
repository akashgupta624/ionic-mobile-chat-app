import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Contact } from '@capacitor-community/contacts';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  form: Form = {
    email: 'Your Email',
    password: 'Password',
    name: 'Your Name',
    status: "What's in your mind ...",
    phone: 'Your Phone Number',
    profilePicture: '../../../assets/img/avatar.svg',
    otp: 'OTP',
    phoneAuth: {},
    conversations: {
      'Admin': {"chats":[{"date":new Date(),"chats":[{"message":"Welcome from Ionic App","date":new Date(),"type":"user"}, {"message":"Please go through your privacy settings","date":new Date(),"type":"user"}]}],"lastMessage":"Please go through your privacy settings","lastMessageTime":new Date(),"displayName":"Admin","phoneNumbers":[{"number":"Admin","label":"mobile"}],"emails":[],"contactId":"0081300F-C478-4D95-B8CF-3EEECE3FFBF2:ABPerson","photoThumbnail":"default","status":"What's in your mind ...","organizationRole":"Admin","unRead":2}
    },
    groups: {
      'Admin': {"chats":[{"date":new Date(),"chats":[{"message":"Welcome from Ionic App","date":new Date(),"type":"user"}, {"message":"Please go through your privacy settings","date":new Date(),"type":"user"}]}],"lastMessage":"Please go through your privacy settings","lastMessageTime":new Date(),"displayName":"Admin","phoneNumbers":[{"number":"Admin","label":"mobile"}],"emails":[],"contactId":"0081300F-C478-4D95-B8CF-3EEECE3FFBF2:ABPerson","photoThumbnail":"default","status":"What's in your mind ...","organizationRole":"Admin","unRead":2}
    },
    freshLogin: true,
    deviceToken: 'No Token'
  }
  contactList: ContactList = Object.create({});
  showLoader: boolean = false;

  formData$: Subject<Form> = new Subject<Form>();
  currentMesssage = new BehaviorSubject<any>(null);
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private fireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
    // this.angularFireMessaging.messages.subscribe(
    //   (_messaging: AngularFireMessaging) => {
    //   _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    //   _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    // })
  }
  // Login in with email/password
  SignIn() {
    this.ngFireAuth.signInWithEmailAndPassword(this.form.email, this.form.password)
    .then((result) => {
      //this.form.googleAuth = result;
      this.router.navigate(['/register']);
    })
    .catch((error) => {
      this.RegisterUser();
    });
  }

  requestPermission(): void {
    this.angularFireMessaging.requestToken.subscribe((token) => {
      if (token) {
        this.form.deviceToken = token
      }
    })
  }

  receiveMessage(): void {
    this.angularFireMessaging.messages.subscribe((message) => {
      if (message) {
        console.log("Message received from server as notification");
        this.currentMesssage.next(message);
      }
    })
  }

  // Register user with email/password
  RegisterUser() {
    return this.ngFireAuth.createUserWithEmailAndPassword(this.form.email, this.form.password)
    .then((result) => {
      //this.form.googleAuth = result;
      this.router.navigate(['/register']);
    })
    .catch((error) => {
      window.alert(error);
    });
  }
  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['login']);
      });
    });
  }
  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }
  // Sign in with Gmail
  GoogleAuth() {
    this.ngFireAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((result) => {
      //this.form.googleAuth = result;
      this.router.navigate(['/register']);
    })
    .catch((error) => {
      window.alert(error);
    });
  }
  FacebookAuth() {
    this.ngFireAuth.signInWithPopup(new auth.FacebookAuthProvider())
    .then((result) => {
      //this.form.facebookAuth = result;
      this.router.navigate(['/register']);
    })
    .catch((error) => {
      window.alert(error);
    });
  }
  
  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      this.showLoader = false;
      localStorage.removeItem('user');
      Preferences.clear();
      this.router.navigate(['login']);
    });
  }

  public signInWithPhoneNumber(recaptchaVerifier, phoneNumber: string) {
    this.showLoader = true;
    return new Promise<any>((resolve, reject) => {
      
      this.fireAuth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((phoneAuth) => {
          this.form.phoneAuth = phoneAuth;
          resolve(phoneAuth);
          this.showLoader = false;
        }).catch((error) => {
          console.log(error);
          reject('SMS not sent');
          this.showLoader = false;
        });
    });
  }
  public async enterVerificationCode(code) {
    this.showLoader = true;
    return new Promise<any>((resolve, reject) => {
      this.form.phoneAuth.confirm(code).then(async (result) => {
        const user = result.user;
        resolve(user);
        this.showLoader = false;
      }).catch((error) => {
        reject(error.message);
        this.showLoader = false;
      });

    });
  }

  public async loadFormData(date: string = (new Date()).toString()) {
    return new Promise<any>((resolve, reject) => {
      Preferences.get({ key: 'form' }).then((formData) => {
        this.form = (formData.value)? JSON.parse(formData.value) : this.form;
        if (this.form && this.form.freshLogin) {
          this.form.conversations = {
            'Admin': 
              {
                "chats":[{"date":date,"chats":[{"message":"Welcome from Ionic App","date":date,"type":"user"}, {"message":"Please go through your privacy settings","date":date,"type":"user"}]}],"lastMessage":"Please go through your privacy settings","lastMessageTime":date,"displayName":"Admin","phoneNumbers":[{"number":"Admin","label":"mobile"}],"emails":[],"contactId":"0081300F-C478-4D95-B8CF-3EEECE3FFBF2:ABPerson","photoThumbnail":"default","status":"What's in your mind ...","organizationRole":"Admin","unRead":2
              }
          }
        };
        this.formData$.next(this.form);
        resolve("");
      }); 
    });
  }



}

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }

 export interface Form {
  email: any,
  password: any,
  phone: any,
  name: any,
  status: any,
  profilePicture: any,
  otp: any,
  phoneAuth: any,
  conversations: Object,
  groups: Object,
  freshLogin: boolean,
  deviceToken: string
 }

 export interface ContactList {
  allContacts: Contact[],
  accessibleContacts: {
    viaName: {},
    viaNumber: {},
  },
  unknownContacts: Contact[]
 }