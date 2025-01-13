import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../utilities/constants.utility";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = API_URL + '/v1'

  constructor(public http: HttpClient) { }

  getAll(): Observable<any[]>{
    return  this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }

  findById(id: string): Observable<any>{
    return  this.http.get<any[]>(`${this.apiUrl}/categoria/${id}`);
  }

}
