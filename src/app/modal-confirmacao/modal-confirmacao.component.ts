import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-confirmacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirmacao.component.html',
  styleUrl: './modal-confirmacao.component.css'
})
export class ModalConfirmacaoComponent {
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  confirm() {
   
    this.close();
  }
}
