import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../services/auth.service';
import { ServerMessage } from '../../services/message.modal';
import { ServerConnect } from '../../services/server-connect.service';
import { CurrentUserInterface } from '../chat-detail/chat-detail.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-audio-call',
  templateUrl: './video-audio-call.component.html',
  styleUrls: ['./video-audio-call.component.css']
})

export class VideoAudioCallComponent implements OnInit {
  
  videoOn = true;
  audioOn = true;
  callStatus = 'Calling';
  uniqueId = '';
  user: CurrentUserInterface = Object.create({});
  constructor(private route: ActivatedRoute,
    private dataService: ServerConnect,
    private auth: AuthenticationService,
    private location: Location) { }
  
  ngOnInit() {
    this.user = JSON.parse(this.route.snapshot.paramMap.get('user'));
    if (this.user && this.user.id) {
      this.uniqueId = this.auth.form.phone + this.user.id;
      let msg: ServerMessage = new ServerMessage('subscribe', 'calling', [this.user.id, this.auth.form.phone, this.auth.form.name, this.auth.form.conversations[this.user.id], this.uniqueId]);
      this.dataService.socket$.emit('subscribe', msg, (data) => {
        if(data.subscriptionType === 'Success') {
          this.callStatus = 'Ringing';
          this.dataService.initCall(this.uniqueId);
        }
        else {
          //this.callStatus = ''
        }
      });
    }
    else {
      this.uniqueId = JSON.parse(this.route.snapshot.paramMap.get('uniqueId'));
      this.dataService.initCall(this.uniqueId);
    }
    
  }

toggleVideo() {
  this.videoOn = !this.videoOn;
  if (this.videoOn) {
    this.dataService.localStream.unmuteVideo();
  }
  else {
    this.dataService.localStream.muteVideo();
  }
}

toggleAudio() {
  this.audioOn = !this.audioOn;
  if (this.audioOn) {
    this.dataService.localStream.unmuteAudio();
  }
  else {
    this.dataService.localStream.muteAudio();
  }
}

goBack() {
  this.dataService.leaveCall(this.user.id);
}
}
