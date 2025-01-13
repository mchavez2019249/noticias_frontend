import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from "@angular/material/card";
import {NoticiasService} from "../../services/noticias.service";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Noticia} from "../../interfaces/Noticia";
import {DatePipe} from "@angular/common";
import {CategoriasService} from "../../services/categorias.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatCardModule, HttpClientModule, DatePipe, RouterOutlet
  ],
  providers: [NoticiasService, HttpClient, CategoriasService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  categorias: any[] = [];
  constructor(private service: NoticiasService, private router: Router, private categoryService: CategoriasService) {
  }
  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoryService.getAll().subscribe({
      next: (data: any) => {
        this.categorias = data;
      }, error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  redirectCategorySection(id: String){
    this.router.navigate(['/home/noticia_categoria'], {
      queryParams: {type: id}
    })
  }
}
