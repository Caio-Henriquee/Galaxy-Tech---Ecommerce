import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter, Output, inject } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProdutosService } from '../service/produtos.service';
import { produtos } from '../interface/produtos.interface';
import { RouterLink, Router } from '@angular/router';
import { CardGerenciarComponent } from '../card-gerenciar/card-gerenciar.component';


@Component({
  selector: 'app-gerenciar-produtos',
  standalone: true,
  imports: [RouterLink,CardGerenciarComponent],
  templateUrl: './gerenciar-produtos.component.html',
  styleUrl: './gerenciar-produtos.component.css'
})
export class GerenciarProdutosComponent{

  produtos: produtos[] = [];

  produtosService = inject(ProdutosService);
  router = inject(Router);


 ngOnInit() {
  this.produtosService.getAll().subscribe((produtos) => {
    this.produtos = produtos;
  });
}


  onEdit(produtos: produtos) {
    
    this.router.navigate(['/editar', produtos.id]);
  }
}

