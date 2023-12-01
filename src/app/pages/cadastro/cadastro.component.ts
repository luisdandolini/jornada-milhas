import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
      this.cadastroForm = this.formBuilder.group({
        nome: [null, Validators.required],
        nascimento: [new Date(), Validators.required],
        genero: [null, Validators.required],
        cpf: [null, Validators.required],
        telefone: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        confirmEmail: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
        aceito: [false, Validators.required]
      })
  }

  register() {
    console.log('Registrado!', this.cadastroForm)
  }
}
