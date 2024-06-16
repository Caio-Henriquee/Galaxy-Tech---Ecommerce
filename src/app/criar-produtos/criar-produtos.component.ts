import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../service/produtos.service';
import { subscribe } from 'diagnostics_channel';
import { Router } from 'express';
@Component({
  selector: 'app-criar-produtos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-produtos.component.html',
  styleUrls: ['./criar-produtos.component.css']
})
export class CriarProdutosComponent {

  ProdutosService = inject(ProdutosService);

  form = new FormGroup({
    nomeProduto: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    quantidade: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0)],
    }),
    valor: new FormControl<number | null>(null, {
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
    foto: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    })
  });

  onSubmit() {
    this.ProdutosService.post({
     nome: this.form.controls.nomeProduto.value,
      quantidade: this.form.controls.quantidade.value as number,
      valor :this.form.controls.valor.value as number,
      categoria: this.form.controls.categoria.value,
      descricao :this.form.controls.descricao.value,
      url: this.form.controls.foto.value
    })
    .subscribe(()=>{
      alert('sucesso');
    });

  }
}
