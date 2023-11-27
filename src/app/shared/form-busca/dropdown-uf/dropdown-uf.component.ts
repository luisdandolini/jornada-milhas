import { UnidadeFederativa } from './../../../core/types/types';
import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() icon: string = '';
  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions = [];

  constructor(private unidadeFederativaService: UnidadeFederativaService) { }

  ngOnInit(): void {
      this.unidadeFederativaService.listar()
        .subscribe(dados => {
          this.unidadesFederativas = dados
          console.log(this.unidadesFederativas)
        })
  }
}
