import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { Depoimentos } from 'src/app/core/types/types';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{
  depoimentos: Depoimentos[] = [];

  constructor(
    private depoimentosService: DepoimentosService
  ) {}

  ngOnInit(): void {
    this.listarDepoimentos();
  }

  listarDepoimentos() {
    this.depoimentosService.listar()
      .subscribe(
        response => {
          this.depoimentos = response
          console.log(this.depoimentos)
        }
      )
  }
}
