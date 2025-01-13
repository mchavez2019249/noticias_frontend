import {Component, OnInit} from '@angular/core';
import {NoticiasService} from "../../services/noticias.service";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Noticia} from "../../interfaces/Noticia";

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [HttpClientModule,MatCardModule, MatButtonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.scss',
  providers: [NoticiasService, HttpClient],

})
export class NoticiaComponent implements OnInit {
  subscriptionRoute: Subscription;
  idNoticia: string = '';
  data: Noticia[] = [];
  constructor(private service: NoticiasService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptionRoute = this.route.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.idNoticia = params.id;
        this.service.findById(this.idNoticia).subscribe({
          next: (data: any) => {
            this.data = data;
          }, error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        })
      }
    });
  }

}
