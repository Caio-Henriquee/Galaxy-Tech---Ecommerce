import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-produtos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent {
  form = new FormGroup({
    nomeProduto: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    quantidade: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0)],
    }),
    preco: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0)],
    }),
    categoria: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    descricao: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    foto: new FormControl<File | null>(null, {
      validators: Validators.required,
    })
  });

  onSubmit() {
    this.form.controls.nomeProduto.value;
    this.form.controls.quantidade.value;
    this.form.controls.preco.value;
    this.form.controls.categoria.value;
    this.form.controls.descricao.value;
    this.form.controls.foto.value
  }
}
