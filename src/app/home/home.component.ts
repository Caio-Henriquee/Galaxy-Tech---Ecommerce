import { Component } from '@angular/core';
import { HeaderContentComponent } from '../header/header-content/header-content.component';
import { NavbarContentComponent } from '../navbar/navbar-content/navbar-content.component';
import { CardContentComponent } from '../card/card-content/card-content.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderContentComponent, NavbarContentComponent, CardContentComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards1 = [
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' },
    { title: 'Monitor', image: '../../../assets/MONITOR.jpg', preco: '2000' },
  ];  

  cards2= [
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' },
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' },
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' },
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' },
    { title: 'Relogio', image: '../../assets/download.jpg', preco: '1400' },
  ];
}
