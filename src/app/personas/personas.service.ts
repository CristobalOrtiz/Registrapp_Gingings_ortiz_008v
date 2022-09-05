import { Injectable } from '@angular/core';
import {Alumno} from './personas.model'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private alumnos: Alumno[] = [
    {
      id: '1',
      title: 'Alumno1',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    },
    {
      id: '2',
      title: 'Alumno2',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    }
    ,
    {
      id: '3',
      title: 'Alumno3',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    }
    ,
    {
      id: '4',
      title: 'Alumno4',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    }
    ,
    {
      id: '5',
      title: 'Alumno5',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    }
    ,
    {
      id: '6',
      title: 'Alumno6',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    }
    ,
    {
      id: '7',
      title: 'Alumno7',
      imageURL: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
    }
  ]

  constructor() { }

  getAlumnos() {
    return [...this.alumnos]
  }

  getAlumno(alumnoTitle: string) {
    return {
      ...this.alumnos.find(alumnos => {
        return alumnos.title === alumnoTitle
      })
    }
  }

  addAlumno(title: string, imageURL: string) {
    this.alumnos.push({
        title,
        id: this.alumnos.length + 1 + "",
        imageURL,
      }
    );
  }

  deleteAlumno(alumnoTitle: string) {
    this.alumnos = this.alumnos.filter(alumnos => {
      return alumnos.title !== alumnoTitle
    })
  }
}
