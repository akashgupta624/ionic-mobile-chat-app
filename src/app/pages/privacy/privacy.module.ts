import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyComponent } from './privacy.component';
import { PrivacyPageRouting } from './privacy.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPageRouting
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyPageModule {}
