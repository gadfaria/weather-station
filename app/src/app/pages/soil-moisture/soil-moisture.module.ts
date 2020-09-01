import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoilMoisturePageRoutingModule } from './soil-moisture-routing.module';

import { SoilMoisturePage } from './soil-moisture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoilMoisturePageRoutingModule
  ],
  declarations: [SoilMoisturePage]
})
export class SoilMoisturePageModule {}
