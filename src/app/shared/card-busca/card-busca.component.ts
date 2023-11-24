import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent implements OnInit {
  promocoes: Promocao[] = []; 
  
  constructor(
    private servicoPromocao: PromocaoService
  ) { }

  ngOnInit(): void {
    this.servicoPromocao.listar()
      .subscribe(
        response => {
          this.promocoes = response
        }
      )
  }
}
