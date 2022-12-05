import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { AuthenticationService } from './auth.service';
import { ServerMessage } from './message.modal';
import { Contact, Contacts } from '@capacitor-community/contacts';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ServerConnect {

public socket$!: Socket;
public day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
public month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

constructor(private platform: Platform,
  private authService: AuthenticationService) {

}

public connect(): void {
  if (!this.socket$) {
    this.socket$ = io.connect(environment.server,  { transports: ['websocket', 'polling', 'flashsocket'] });
    this.startListeningForIncomingMessages();
    this.getNotifications();
    //this.userOnline();
  }
}

public startListeningForIncomingMessages(): void {
  this.socket$.on('getMessage', (data) => {
    if(data) {
      const message = data.message;
      const userId = data.phone as string;
      const userData = this.authService.contactList.accessibleContacts.viaNumber[userId];
      let chats = Object.create({});
      if (this.authService.form.conversations[userId]) {
        // old user
        chats = this.authService.form.conversations[userId].chats;
      } else {
        const value = {"chats": [], "lastMessage": '', "lastMessageTime":'', ...userData, "unRead": 0};
        this.authService.form.conversations[userId] = value;
        //  new user 
        chats = [];
      }
      console.log("message received + " + data);
      let added = false;
      let date = new Date();
      let today = (this.day[date.getDay()] + " " + date.getDate() + " " + this.month[date.getMonth()] + " " + date.getFullYear());
      for (let chat of chats) {
        if (chat.date === today) {
          chat.chats.push({
            message: message,
            date: date,
            type: 'user'
          });
          added = true;
          break;
        }
      }
      if (!added) {
        chats.push({
          date: today,
          chats: [{
            message: message,
            date: date,
            type: 'user'
          }]
        });
      }
      this.authService.form.conversations[userId].lastMessage = message;
      this.authService.form.conversations[userId].lastMessageTime = today;
      this.authService.form.conversations[userId].unRead = this.authService.form.conversations[userId].unRead + 1;
      this.authService.formData$.next(this.authService.form);
    }
  })
}

public async sendMessage(userId: any, message: any ): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    if (this.authService.form.conversations[userId]) {
      const chats = this.authService.form.conversations[userId].chats;
      let added = false;
      let date = new Date();
      let today = (this.day[date.getDay()] + " " + date.getDate() + " " + this.month[date.getMonth()] + " " + date.getFullYear());
      for (let chat of chats) {
        if (chat.date === today) {
          chat.chats.push({
            message: message,
            date: date,
            type: 'me'
          });
          added = true;
          break;
        }
      }
      if (!added) {
        chats.push({
          date: today,
          chats: [{
            message: message,
            date: date,
            type: 'me'
          }]
        });
        this.authService.form.conversations[userId].chats = chats;
      }
      else {
        this.authService.form.conversations[userId].chats = chats;
      }
    this.authService.form.conversations[userId].lastMessage = message;
    this.authService.form.conversations[userId].lastMessageTime = today; 
    this.authService.form.conversations[userId].unRead = this.authService.form.conversations[userId].unRead + 1;
    }
    // clear input
    resolve("");
    let msg: ServerMessage = new ServerMessage('subscribe', 'sendMessage', [userId, this.authService.form.phone, this.authService.form.name, this.authService.form.conversations[userId]]);
    this.socket$.emit('subscribe', msg, (data) => {
      this.authService.form.conversations[userId].unRead = 0;
      let deleted = this.authService.form.conversations[userId];
      delete this.authService.form.conversations[userId];
      let newItem = {};
      newItem[userId] = deleted;
      this.authService.form.conversations = {...newItem, ...this.authService.form.conversations};
      this.authService.formData$.next(this.authService.form);
      // if(data.result === 'Success') {
      //  // do something
      // }
      // else if (data.result === 'FailedToSendMessage') {

      // }
      // else {

      // }
    })
  })
}  

public userOnline(): void {
  const msg = new ServerMessage('subscribe', 'online', this.authService.form.phone); 
  this.socket$.emit('subscribe', msg, (data) => {
    if(data.result === 'Success') {
    // do something
    }
  })
}

public userOffline(): void {
  const msg = new ServerMessage('subscribe', 'offline', this.authService.form.phone); 
  this.socket$.emit('subscribe', msg, (data) => {
    if(data.result) {
    // do something
    Preferences.set({
      key: 'form',
      value: JSON.stringify(this.authService.form),
    });
    // send data to backend server to save it file
    console.log("user is disconnected :- ", this.authService.form);
    }
  })
}

public userInactive(): void {
  const msg = new ServerMessage('subscribe', 'inactive', this.authService.form.phone); 
  this.socket$.emit('subscribe', msg, (data) => {
    if(data.result) {
    // do something
    Preferences.set({
      key: 'form',
      value: JSON.stringify(this.authService.form),
    });
    console.log("user is inactive :- ", this.authService.form);
    }
  })
}

public getNotifications(): void {
  const msg = new ServerMessage('subscribe', 'getNotifications', this.authService.form.phone); 
  this.socket$.emit('subscribe', msg, (data: any[]) => {
    data.forEach((user) => {
      let result = user.conversation;
      result.chats.forEach(chat => {
        chat.chats.forEach(chat => {
          chat.type = 'user';
        });
      });
      const fromContact = this.authService.contactList.accessibleContacts.viaNumber[user.from];
      if (this.authService.form.conversations[user.from]) {
        const chats = this.authService.form.conversations[user.from].chats;
        let added = false;
        for (let i=0; i<chats.length; i++) {
          if (chats[i].date === result.chats.date) {
            chats[i].chats.push(result.chats.chats);
            added = true;
            break;
          }
        }
        if (!added) {
          chats.push(result.chats);
        }
        
        this.authService.form.conversations[user.from].chats = chats;
      }
      else {
        result.status = fromContact.status;
        result.contactId = fromContact.contactId;
        result.displayName = fromContact.displayName;
        result.phoneNumbers = fromContact.phoneNumbers;
        result.emails = fromContact.emails;
        result.photoThumbnail = fromContact.photoThumbnail;
        result.organizationName = fromContact.organizationName;
        result.organizationRole = fromContact.organizationRole;
        result.birthday = fromContact.birthday;
        this.authService.form.conversations[user.from] = result;
      }
    });
    this.authService.formData$.next(this.authService.form);
    console.log("Notifications fetched and saved to form");
  });
}

public getContacts(): void {
  if (this.platform.is('hybrid')) {
    Contacts.getContacts().then(result => {
      console.log("Phone Contacts read successfully ", result.contacts);
      this.authService.contactList.allContacts = result.contacts;
      let msg: ServerMessage = new ServerMessage('subscribe', 'accessibleContacts', result.contacts);
      this.socket$.emit('subscribe', msg, (data) => {
        this.authService.contactList.accessibleContacts = Object.create({});
        this.authService.contactList.accessibleContacts.viaName = Object.create({});
        this.authService.contactList.accessibleContacts.viaNumber = Object.create({});
        console.log("Accessible Contacts ", data.result);
        data.result.forEach((result) => {
          this.authService.contactList.allContacts.forEach((contact: Contact) => {
            for(let i=0;i<contact.phoneNumbers.length;i++) {
              let number = (contact.phoneNumbers[i].number.length > 10)? contact.phoneNumbers[i].number.slice(-10).trim(): contact.phoneNumbers[i].number.trim();
              if (number === result.phone) {
                let t: Object = {};
                t['status'] = result.status;
                contact.photoThumbnail = (result.profilePicture)? result.profilePicture: 'default';
                t = {...contact, ...t};
                this.authService.contactList.accessibleContacts.viaName[contact.displayName] = t;
                this.authService.contactList.accessibleContacts.viaNumber[number] = t;
              }
            }
          });
        });
        this.authService.formData$.next(this.authService.form);
      });
    });
  }
}

}
