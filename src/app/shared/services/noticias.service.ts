import { Injectable } from '@angular/core';
import {API_URL} from "../utilities/constants.utility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiUrl = API_URL + '/v1'
  constructor(public http: HttpClient) { }

  getAll(): Observable<any[]>{
    return  this.http.get<any[]>(`${this.apiUrl}/noticias`);
  }

  findById(id: string): Observable<any>{
    return  this.http.get<any[]>(`${this.apiUrl}/noticia/${id}`);
  }

  findByCategoryId(id: string): Observable<any>{
    return  this.http.get<any[]>(`${this.apiUrl}/noticia/categoria/${id}`);
  }

}
