import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuelegaPage } from './menuelega.page';

const routes: Routes = [
  {
    path: '',
    component: MenuelegaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuelegaPageRoutingModule {}
