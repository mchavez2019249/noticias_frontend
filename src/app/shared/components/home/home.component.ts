import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //ejemplo fake cambiar por data de servicio
 noticias: any[]= [
   {title: 'Gobierno a examen: Programas sociales tuvieron poco avance y falta de certeza sobre beneficiarios' , description: 'Noticias ejemplo 1'},
   {title: 'Qué hará el centro de “respuesta a emergencias informáticas” que propone la Ley de Ciberseguridad' , description: 'Noticias ejemplo 2'},
   {title: 'Calificadora Fitch Ratings efectuará visita para evaluación del país y sectores expresan expectativas y retos' , description: 'Noticias ejemplo 2'}
 ]

}
