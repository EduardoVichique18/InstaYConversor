import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstaPage } from './insta.page';

const routes: Routes = [
  {
    path: '',
    component: InstaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstaPageRoutingModule {}
