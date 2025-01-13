import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    FontAwesomeModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faGoogle = faGoogle

  login(){
    console.log('click')
  }

}
