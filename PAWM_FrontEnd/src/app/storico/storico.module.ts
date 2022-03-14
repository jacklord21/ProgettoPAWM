import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoricoPageRoutingModule } from './storico-routing.module';

import { StoricoPage } from './storico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoricoPageRoutingModule
  ],
  declarations: [StoricoPage]
})
export class StoricoPageModule {}
