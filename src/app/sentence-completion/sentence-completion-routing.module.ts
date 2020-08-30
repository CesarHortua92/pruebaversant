import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentenceCompletionPage } from './sentence-completion.page';

const routes: Routes = [
  {
    path: '',
    component: SentenceCompletionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentenceCompletionPageRoutingModule {}
