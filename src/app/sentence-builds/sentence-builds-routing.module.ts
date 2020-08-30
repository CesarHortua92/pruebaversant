import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentenceBuildsPage } from './sentence-builds.page';

const routes: Routes = [
  {
    path: '',
    component: SentenceBuildsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentenceBuildsPageRoutingModule {}
