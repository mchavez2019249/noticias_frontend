import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLoggedIn: boolean = false;
  title = 'Noticias_FE';

  ngOnInit() {
    this.isLoggedIn = true //cambiar al implementar servicio token
  }
}

