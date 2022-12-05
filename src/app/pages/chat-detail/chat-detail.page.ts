import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '@capacitor-community/contacts';
import { Preferences } from '@capacitor/preferences';
import { IonContent, IonItemSliding } from '@ionic/angular';
import { BehaviorSubject, SubscriptionLike } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/auth.service';
import { ServerMessage } from '../../services/message.modal';
import { ServerConnect } from '../../services/server-connect.service';

export interface CurrentUserInterface {
  id: string;
  name: string;
  email: string;
  avatar: string;
  lastMessage: string;
}

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit, OnDestroy {
  userId = null;
  user: CurrentUserInterface = Object.create({});
  chats: any[] = [];
  imageBg = 'chat-bg';
  message: string = '';
  messageControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  isPageScrolling = false;
  isAllowScrollEvents = false;
  isAllowScroll = true;
  scrolling: BehaviorSubject<boolean> = new BehaviorSubject(false);

  subscriptions: SubscriptionLike[] = [];
  @ViewChild(IonContent) private content: IonContent;
  @ViewChild('textArea', { static: false }) private textArea: ElementRef;
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private dataService: ServerConnect
  ) {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  /**
   * Content scroll start
   */
  logScrollStart() {
    this.scrolling.next(true);
  }

  /**
   * Content scrolling
   */
  logScrolling(event) {
    // console.log('Scrolling');
  }

  /**
   * Content scroll end
   */
  logScrollEnd() {
    this.scrolling.next(false);
  }

  onBlur() {
    this.textArea.nativeElement.target.focus();
    this.textArea.nativeElement.focus();
  }

  /**
   * Reply message (drag)
   * @param {Event} event - drag event
   * @param {IonItemSliding} slidingItem - item sliding directive
   */
  messageDraged(event, slidingItem: IonItemSliding) {
    if (event.detail.ratio === 1) {
      slidingItem.closeOpened();
    }
  }

  /**
   * Send message
   */
  sendMessage(event) {
    event.preventDefault();
    this.dataService.sendMessage(this.userId, this.message).then(() => {
      this.content.scrollToBottom(0);
    });
    this.messageControl.setValue('');
    this.message = '';
    // scroll to bottom
    // setTimeout(() => {
    //   if (this.chats.length > 0) {
    //     this.content.scrollToBottom(0);
    //   }
    // });
  }

  dataInit() {
    return new Promise((resolve) => {
      this.user.avatar = ((this.authService.form.conversations[this.userId] as Contact)?.photoThumbnail === 'default')
        ?  '../../../assets/img/avatar.svg'
        : (this.authService.form.conversations[this.userId] as Contact)?.photoThumbnail;
      this.user.name = (this.authService.form.conversations[this.userId] as Contact)?.displayName;
      this.user.id = this.userId;
      this.user.lastMessage = this.authService.form.conversations[this.userId]?.lastMessage;
      this.chats = this.authService.form.conversations[this.userId].chats;
      this.authService.form.conversations[this.userId].unRead = 0;
      if (this.userId === 'Admin') {
        this.authService.form.freshLogin = false;
        delete this.authService.form.conversations['Admin'];
      }
      this.authService.formData$.next(this.authService.form);
      resolve("");
    });
  }

  ngOnInit(): void {
    //this.dataService.startListeningForIncomingMessages();
    this.subscriptions.push(
      this.scrolling.pipe(
        tap(scroll => {
          if (scroll) {
            this.isPageScrolling = scroll;
          }
        }),
        debounceTime(1000),
      ).subscribe(res => this.isPageScrolling = res)
    );
    this.dataInit()
      .then(() => {
        this.content.scrollToBottom(0);
      })
      .then(() => setTimeout(() => this.isAllowScrollEvents = true));

    // this.authService.formData$.subscribe((data) => {
    //  if (this.user && this.user.lastMessage && this.user.lastMessage !== this.authService.form.conversations[this.userId]?.lastMessage) {
    //   this.content.scrollToBottom(0);
    //  }
     
    // })
  }

  ionViewDidEnter() { }

  ngOnDestroy(): void {
    // Preferences.set({
    //   key: 'form',
    //   value: JSON.stringify(this.authService.form),
    // });
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
