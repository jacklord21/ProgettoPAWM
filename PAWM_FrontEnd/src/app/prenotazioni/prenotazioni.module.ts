import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrenotazioniPageRoutingModule } from './prenotazioni-routing.module';

import { PrenotazioniPage } from './prenotazioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrenotazioniPageRoutingModule
  ],
  declarations: [PrenotazioniPage]
})
export class PrenotazioniPageModule {}
