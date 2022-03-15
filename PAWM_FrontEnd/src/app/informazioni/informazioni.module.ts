import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformazioniPageRoutingModule } from './informazioni-routing.module';

import { InformazioniPage } from './informazioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformazioniPageRoutingModule
  ],
  declarations: [InformazioniPage]
})
export class InformazioniPageModule {}
