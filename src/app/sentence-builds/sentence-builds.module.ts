import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentenceBuildsPageRoutingModule } from './sentence-builds-routing.module';

import { SentenceBuildsPage } from './sentence-builds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentenceBuildsPageRoutingModule
  ],
  declarations: [SentenceBuildsPage]
})
export class SentenceBuildsPageModule {}
