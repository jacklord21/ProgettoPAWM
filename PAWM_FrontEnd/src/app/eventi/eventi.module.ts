import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventiPageRoutingModule } from './eventi-routing.module';

import { EventiPage } from './eventi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventiPageRoutingModule,
    FormsModule,
   ReactiveFormsModule
  ],
  declarations: [EventiPage]
})
export class EventiPageModule {}
