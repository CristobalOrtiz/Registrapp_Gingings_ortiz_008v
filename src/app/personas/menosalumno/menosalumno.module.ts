import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenosalumnoPageRoutingModule } from './menosalumno-routing.module';

import { MenosalumnoPage } from './menosalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenosalumnoPageRoutingModule
  ],
  declarations: [MenosalumnoPage]
})
export class MenosalumnoPageModule {}
