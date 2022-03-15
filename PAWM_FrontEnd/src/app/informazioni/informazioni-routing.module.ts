import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformazioniPage } from './informazioni.page';

const routes: Routes = [
  {
    path: '',
    component: InformazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformazioniPageRoutingModule {}
