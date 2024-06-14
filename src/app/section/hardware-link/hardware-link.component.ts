import { Component } from '@angular/core';
import { SectionLiksComponent } from '../section-liks/section-liks.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-hardware-link',
  standalone: true,
  imports: [SectionLiksComponent,CommonModule],
  templateUrl: './hardware-link.component.html',
  styleUrl: './hardware-link.component.css'
})
export class HardwareLinkComponent {
  cards = [
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400',description:'Smart Watch 110v.' },
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' ,description:'Smart Watch 110v.'},
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' ,description:'Smart Watch 110v.'},
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400',description:'Smart Watch 110v. '},  
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' ,description:'Smart Watch 110v.'},
  ];  
}

