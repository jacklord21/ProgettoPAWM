import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventiPageRoutingModule } from './eventi-routing.module';

import { EventiPage } from './eventi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventiPageRoutingModule
  ],
  declarations: [EventiPage]
})
export class EventiPageModule {}
