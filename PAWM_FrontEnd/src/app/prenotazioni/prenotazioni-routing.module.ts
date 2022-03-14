import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrenotazioniPage } from './prenotazioni.page';

const routes: Routes = [
  {
    path: '',
    component: PrenotazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrenotazioniPageRoutingModule {}
