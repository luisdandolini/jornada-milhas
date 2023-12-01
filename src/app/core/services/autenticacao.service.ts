import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  autenticar(email: string, senha: string): Observable<Login[]> {
    return this.http.post<Login[]>(`${this.apiUrl}/auth/login`, { email, senha })
  }
}
