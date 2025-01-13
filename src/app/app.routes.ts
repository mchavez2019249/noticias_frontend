import { Routes } from '@angular/router';
import {LoginComponent} from "./shared/components/login/login.component";
import {HomeComponent} from "./shared/components/home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[],
  children:[
    //{path: 'noticia', component: NoticiaComponent},
  ]},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
