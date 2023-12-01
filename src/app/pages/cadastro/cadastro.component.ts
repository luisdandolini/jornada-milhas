import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { UnidadeFederativa, Usuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.cadastroForm = this.formBuilder.group({
        nome: [null, Validators.required],
        nascimento: [new Date(), Validators.required],
        genero: [null, Validators.required],
        cpf: [null, Validators.required],
        telefone: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: this.estadoControl,
        email: [null, [Validators.required, Validators.email]],
        confirmEmail: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
        aceito: [false]
      })
  }

  register() {
    const formValue = this.cadastroForm.value;
  
    const usuario: Usuario = {
      nome: formValue.nome,
      nascimento: formValue.nascimento,
      cpf: formValue.cpf,
      telefone: formValue.telefone,
      email: formValue.email,
      senha: formValue.password,
      genero: formValue.genero,
      cidade: formValue.cidade,
      estado: {
        id: this.estadoControl.value?.id || 0,
        nome: this.estadoControl.value?.nome || '',
        sigla: this.estadoControl.value?.sigla || ''
      }
    };
  
    this.cadastroService.cadastrar(usuario)
      .subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso!', value);
          // this.router.navigateByUrl('/login')
        },
        error: (err) => {
          console.log('Erro no cadastro', err);
        }
      });
  }
  
}
