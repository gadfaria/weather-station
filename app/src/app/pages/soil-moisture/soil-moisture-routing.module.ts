import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoilMoisturePage } from './soil-moisture.page';

const routes: Routes = [
  {
    path: '',
    component: SoilMoisturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoilMoisturePageRoutingModule {}
