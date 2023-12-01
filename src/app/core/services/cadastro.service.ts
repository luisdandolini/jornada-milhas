import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario) {
    return this.http.post<Usuario>(`${this.api}/auth/cadastro`, usuario)
  }
}
