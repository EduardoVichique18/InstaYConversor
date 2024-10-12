import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstaPageRoutingModule } from './insta-routing.module';

import { InstaPage } from './insta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstaPageRoutingModule
  ],
  declarations: [InstaPage]
})
export class InstaPageModule {}
