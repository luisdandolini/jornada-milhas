import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depoimentos } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Depoimentos[]> {
    return this.http.get<Depoimentos[]>(`${this.apiUrl}/depoimentos`)
  }
}
