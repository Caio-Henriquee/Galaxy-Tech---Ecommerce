import { Component, EventEmitter, Output, inject, ViewChild } from '@angular/core';
import ProdutosService from '../service/produtos.service';
import { produtos } from '../interface/produtos.interface';
import { RouterLink, Router } from '@angular/router';
import { CardGerenciarComponent } from '../card-gerenciar/card-gerenciar.component';
import { CommonModule } from '@angular/common';
import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-gerenciar-produtos',
  standalone: true,
  imports: [RouterLink, CardGerenciarComponent, CommonModule],
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent {
  @ViewChild(ModalConfirmacaoComponent) modalConfirmacao!: ModalConfirmacaoComponent;

  produtos: produtos[] = [];

  produtosService = inject(ProdutosService);
  router = inject(Router);

  ngOnInit() {
    this.produtosService.getAll().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

 

  onEdit(produto: produtos) {
    this.router.navigate(['/editar', produto.id]);
  }



  onDelete(produto: produtos) {
    const confirmed = confirm(`Tem certeza que deseja deletar o produto ${produto.nome}?`);
    if (confirmed) {
      this.produtosService.delete(produto.id).subscribe(() => {
        this.produtos = this.produtos.filter(p => p.id !== produto.id);
      });
    }
  }
}
