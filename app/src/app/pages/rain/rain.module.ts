import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RainPageRoutingModule } from './rain-routing.module';

import { RainPage } from './rain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RainPageRoutingModule
  ],
  declarations: [RainPage]
})
export class RainPageModule {}
