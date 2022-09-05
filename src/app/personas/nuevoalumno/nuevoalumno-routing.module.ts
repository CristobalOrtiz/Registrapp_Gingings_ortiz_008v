import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoalumnoPage } from './nuevoalumno.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoalumnoPageRoutingModule {}
