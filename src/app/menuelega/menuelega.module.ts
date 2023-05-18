import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuelegaPageRoutingModule } from './menuelega-routing.module';

import { MenuelegaPage } from './menuelega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuelegaPageRoutingModule
  ],
  declarations: [MenuelegaPage]
})
export class MenuelegaPageModule {}
