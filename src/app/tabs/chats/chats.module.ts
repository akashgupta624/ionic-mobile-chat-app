import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPageRoutingModule } from './chats-routing.module';

import { ChatsPage } from './chats.page';
import { SharedModule } from '../../components/shared.module';
import { ChatNewPageModule } from '../../pages/chat-new/chat-new.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    SharedModule,
    ChatNewPageModule
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
