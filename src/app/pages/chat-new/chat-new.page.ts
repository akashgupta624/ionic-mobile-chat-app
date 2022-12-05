import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-new',
  templateUrl: './chat-new.page.html',
  styleUrls: ['./chat-new.page.scss'],
})
export class ChatNewPage implements OnInit {

  presentingElement = null;
  isAddContactVisible = false;
  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  ShowAddContact(): void {
    this.isAddContactVisible = true;
  }
}
