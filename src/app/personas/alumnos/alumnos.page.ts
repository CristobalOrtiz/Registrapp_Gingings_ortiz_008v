import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../personas.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumno: Alumno;

  constructor(private activatedRouter : ActivatedRoute, private personasService : PersonasService) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      //redirect
      const recipeName = paramMap.get('alumnoName')
      this.alumno = this.personasService.getAlumno(recipeName);
      console.log(this.alumno)
    })
  }

}

