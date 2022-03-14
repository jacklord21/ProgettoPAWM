import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventiPage } from './eventi.page';

const routes: Routes = [
  {
    path: '',
    component: EventiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventiPageRoutingModule {}
