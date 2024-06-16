import { Component, Output, input, EventEmitter } from '@angular/core';
import { produtos } from '../interface/produtos.interface';


@Component({
  selector: 'app-card-gerenciar',
  standalone: true,
  imports: [],
  templateUrl: './card-gerenciar.component.html',
  styleUrl: './card-gerenciar.component.css'
})
export class CardGerenciarComponent {

  
  produtos = input.required<produtos>()

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  
  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
