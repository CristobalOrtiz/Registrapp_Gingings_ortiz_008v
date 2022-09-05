import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoalumnoPageRoutingModule } from './nuevoalumno-routing.module';

import { NuevoalumnoPage } from './nuevoalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoalumnoPageRoutingModule
  ],
  declarations: [NuevoalumnoPage]
})
export class NuevoalumnoPageModule {}
