import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenosalumnoPage } from './menosalumno.page';

const routes: Routes = [
  {
    path: '',
    component: MenosalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenosalumnoPageRoutingModule {}
