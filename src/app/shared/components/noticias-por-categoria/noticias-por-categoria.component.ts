import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {NoticiasService} from "../../services/noticias.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {CategoriasService} from "../../services/categorias.service";
import {Noticia} from "../../interfaces/Noticia";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-noticias-por-categoria',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatCardModule, HttpClientModule, DatePipe, RouterOutlet
  ],
  templateUrl: './noticias-por-categoria.component.html',
  styleUrl: './noticias-por-categoria.component.scss',
  providers: [NoticiasService, HttpClient, CategoriasService],
})
export class NoticiasPorCategoriaComponent implements OnInit {
  noticias: Noticia[] = []
  subscriptionRoute: Subscription;
  idType: string = '';
  message: string = 'Aún no se registran noticias para esta categoría.'
  nameCategory: String = '';
  constructor(private service: NoticiasService,
              private categoriaService: CategoriasService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptionRoute = this.route.queryParams.subscribe((params: any) => {
      if (params.type) {
        this.idType = params.type;
        this.getNameCategoria(this.idType);
        this.service.findByCategoryId(this.idType).subscribe({
          next: (data: any) => {
            if (data){
              this.noticias = data;
            }else{
              this.noticias = [];
            }
          }, error: (err: HttpErrorResponse) => {
            this.noticias = [];
          }
        })
      } else {
        this.service.getAll().subscribe({
          next: (data: any) => {
            if (data) {
              this.nameCategory = '';
              this.noticias = data;
            } else {
              this.nameCategory = '';
              this.noticias = [];
            }
          }, error: (err: HttpErrorResponse) => {
            this.noticias = [];
          }
        })
      }
    });
  }

  redirectNoticia(id: String) {
    this.router.navigate(['/home/noticia'], {
      queryParams: {id: id}
    });
  }


  getNameCategoria(id: string) {
    this.categoriaService.findById(id).subscribe({
      next: (data: any) => {
        if (data.description){
          this.nameCategory = data.description;
        }else{
          this.nameCategory = '';
        }
      }
    })
  }


}
