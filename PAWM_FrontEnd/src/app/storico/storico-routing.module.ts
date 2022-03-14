import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoricoPage } from './storico.page';

const routes: Routes = [
  {
    path: '',
    component: StoricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoricoPageRoutingModule {}
