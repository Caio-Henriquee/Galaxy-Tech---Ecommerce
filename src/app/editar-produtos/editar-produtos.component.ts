import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../service/produtos.service';
import { Router } from 'express';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { produtos } from '../interface/produtos.interface';

@Component({
  selector: 'app-editar-produtos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-produtos.component.html',
  styleUrl: './editar-produtos.component.css'
})

export class EditarProdutosComponent {

  ProdutosService = inject(ProdutosService)
  router = inject(Router)

  produto: produtos = inject(ActivatedRoute).snapshot.data['produtos']
  

  form = new FormGroup({
    nomeProduto: new FormControl<string>(this.produto.nome, {
      nonNullable: true,
      validators: Validators.required,
    }),
    quantidade: new FormControl<number | null>(this.produto.quantidade, {
      validators: [Validators.required, Validators.min(0)],
    }),
    valor: new FormControl<number | null>(this.produto.valor, {
      validators: [Validators.required, Validators.min(0)],
    }),
    categoria: new FormControl<string>(this.produto.categoria, {
      nonNullable: true,
      validators: Validators.required,
    }),
    descricao: new FormControl<string>(this.produto.descricao, {
      nonNullable: true,
      validators: Validators.required,
    }),
    foto: new FormControl<string>(this.produto.url, {
      nonNullable: true,
      validators: Validators.required,
    })
  });

  onSubmit() {
    this.ProdutosService
      .put(this.produto.id, {
        nome: this.form.controls.nomeProduto.value,
        quantidade: this.form.controls.quantidade.value as number,
        valor: this.form.controls.valor.value as number,
        categoria: this.form.controls.categoria.value,
        descricao: this.form.controls.descricao.value,
        url: this.form.controls.foto.value
      })
      .subscribe(() => {
        alert('editado com sucesso');
      });
  }
  
}
