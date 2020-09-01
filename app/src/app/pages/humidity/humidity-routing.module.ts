import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumidityPage } from './humidity.page';

const routes: Routes = [
  {
    path: '',
    component: HumidityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumidityPageRoutingModule {}
