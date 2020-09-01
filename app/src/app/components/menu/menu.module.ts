import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuComponent
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class UserProfilePageModule {}
