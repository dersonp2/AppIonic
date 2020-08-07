import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastyPage } from './toasty.page';

const routes: Routes = [
  {
    path: '',
    component: ToastyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastyPageRoutingModule {}
