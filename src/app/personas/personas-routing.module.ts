import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasPage } from './personas.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasPage,
    children:[
     
      {
        path: 'alumnosId',
        loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: 'horario',
        loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
      },
      {
        path: 'nuevoalumno',
        loadChildren: () => import('./nuevoalumno/nuevoalumno.module').then( m => m.NuevoalumnoPageModule)
      },
      {
        path: 'menosalumno',
        loadChildren: () => import('./menosalumno/menosalumno.module').then( m => m.MenosalumnoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'codigo',
        loadChildren: () => import('./codigo/codigo.module').then( m => m.CodigoPageModule)
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasPageRoutingModule {}
