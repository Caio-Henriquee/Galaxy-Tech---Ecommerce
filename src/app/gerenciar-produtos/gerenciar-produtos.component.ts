import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter, Output, inject } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProdutosService } from '../service/produtos.service';
import { produtos } from '../interface/produtos.interface';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gerenciar-produtos',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './gerenciar-produtos.component.html',
  styleUrl: './gerenciar-produtos.component.css'
})
export class GerenciarProdutosComponent{

  produtos: produtos[] = [];

  produtosService = inject(ProdutosService);
  router = inject(Router);

  @Output() edit =  new EventEmitter();

 ngOnInit() {
  this.produtosService.getAll().subscribe((produtos) => {
    this.produtos = produtos;
  });
}

  

  onEditDebbuger() {
    debugger  
    this.edit.emit();
  }

  onEdit() {
    
    this.router.navigateByUrl('/editar');
  }
}

