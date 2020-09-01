import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperaturePage } from './temperature.page';

const routes: Routes = [
  {
    path: '',
    component: TemperaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperaturePageRoutingModule {}
