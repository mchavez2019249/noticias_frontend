import {Routes} from '@angular/router';
import {LoginComponent} from "./shared/components/login/login.component";
import {HomeComponent} from "./shared/components/home/home.component";
import {NoticiaComponent} from "./shared/components/noticia/noticia.component";
import {
  NoticiasPorCategoriaComponent
} from "./shared/components/noticias-por-categoria/noticias-por-categoria.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home/noticia_categoria', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
    children: [
      {path: 'noticia', component: NoticiaComponent},
      {path: 'noticia_categoria', component: NoticiasPorCategoriaComponent}
    ]
  },
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];
