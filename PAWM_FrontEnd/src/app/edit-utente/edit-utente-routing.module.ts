import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUtentePage } from './edit-utente.page';

const routes: Routes = [
  {
    path: '',
    component: EditUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditUtentePageRoutingModule {}
