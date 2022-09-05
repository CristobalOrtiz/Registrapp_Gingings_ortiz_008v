import { Component, OnInit } from '@angular/core';
import {PersonasService} from './personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {

  alumnos = []

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.alumnos = this.personasService.getAlumnos()
  }

}
