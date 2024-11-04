import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RessettingPageRoutingModule } from './ressetting-routing.module';

import { RessettingPage } from './ressetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RessettingPageRoutingModule
  ],
  declarations: [RessettingPage]
})
export class RessettingPageModule {}
