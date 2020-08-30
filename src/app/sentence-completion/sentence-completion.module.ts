import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentenceCompletionPageRoutingModule } from './sentence-completion-routing.module';

import { SentenceCompletionPage } from './sentence-completion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentenceCompletionPageRoutingModule
  ],
  declarations: [SentenceCompletionPage]
})
export class SentenceCompletionPageModule {}
