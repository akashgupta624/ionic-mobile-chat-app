import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlatformService } from '../../services/platform/platform.service';
import { PhotoService } from '../../services/photo.service';
import { AuthenticationService } from '../../services/auth.service';
import { Contact } from '@capacitor-community/contacts';
import { Router } from '@angular/router';
import { ServerConnect } from '../../services/server-connect.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  searchValue: string;
  chatsList: any[] = [];
  isSearchMode = false;
  showCancelButton = 'never';
  isSearchStarted = false;
  searchResults: Contact[] = [];

  constructor(
    public platformService: PlatformService,
    public authService: AuthenticationService,
    public photoService: PhotoService,
    private router: Router
  ) {}

  dataInit(data) {
    this.chatsList = [];
    return new Promise((resolve) => {
      for (let user in data) {
        this.chatsList.push({
          id: user,
          name: data[user].displayName,
          avatar: (data[user].photoThumbnail === 'default')? '../../../assets/img/avatar.svg': data[user].photoThumbnail,
          lastMessage: data[user].lastMessage,
          lastMessageTime: data[user].lastMessageTime,
          unRead: data[user].unRead
        })
      }
      this.authService.showLoader = false;
      resolve("");
    });
  }

  ngOnInit() {
    //this.dataService.startListeningForIncomingMessages();
    this.authService.showLoader = true;
    this.dataInit(this.authService.form.conversations).then(() => {});
    this.authService.formData$.subscribe((data) => {
      this.dataInit(this.authService.form.conversations).then(() => {});
    })
  }

  onSearch(value): void {
    this.isSearchMode = true;
    this.showCancelButton = 'always';
  }

  onCancel(): void {
    this.isSearchMode = false;
    this.isSearchStarted = false;
    this.showCancelButton = 'never';
    this.searchResults = [];
  }

  handleChange(data): void {
    const value = data.target.value;
    this.searchResults = [];
    if (value) {
      this.isSearchStarted = true;
      this.isSearchMode = true;
      for (let number in this.authService.contactList.accessibleContacts.viaNumber) {
        let contact = this.authService.contactList.accessibleContacts.viaNumber[number];
        if (number.indexOf(value) !== -1 ) {
          contact.organizationRole = number;
          contact.photoThumbnail = (contact.photoThumbnail === 'default')? '../../../assets/img/avatar.svg': contact.photoThumbnail,
          this.searchResults.push(contact);
   
        }
      }
      for (let name in this.authService.contactList.accessibleContacts.viaName) {
        let contact = this.authService.contactList.accessibleContacts.viaName[name];
        if (name.indexOf(value) !== -1 ) {
          contact.organizationRole = contact.phoneNumbers[0].number.slice(-10).trim();
          if (this.searchResults.indexOf(contact) === -1) {
            contact.photoThumbnail = (contact.photoThumbnail === 'default')? '../../../assets/img/avatar.svg': contact.photoThumbnail,
            this.searchResults.push(contact);
          }
        }
      }
      return;
    }
    this.isSearchStarted = false;
  }

  onClick(searchResult: Contact): void {
    if (this.authService.form?.conversations) {
      if (this.authService.form.conversations[searchResult.organizationRole]) {
        this.authService.form.conversations[searchResult.organizationRole].unRead = 0;
      }
      else {
        const value = {"chats": [], "lastMessage": '', "lastMessageTime": '', ...searchResult, "unRead": 0};
        this.authService.form.conversations[searchResult.organizationRole] = value;
      }
    } else {
      this.authService.form.conversations = Object.create({});
      const value = {"chats": [], "lastMessage": '', "lastMessageTime": '', ...searchResult, "unRead": 0};
      this.authService.form.conversations[searchResult.organizationRole] = value;
    }
    this.searchValue = null;
    this.isSearchMode = false;
    this.isSearchStarted = false;
    this.showCancelButton = 'never';
    this.router.navigate(['/chat-detail', searchResult.organizationRole]);
    
  }
}
