import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUtentePageRoutingModule } from './edit-utente-routing.module';

import { EditUtentePage } from './edit-utente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUtentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditUtentePage]
})
export class EditUtentePageModule {}
