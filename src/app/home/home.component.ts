import { Component } from '@angular/core';
import { HeaderContentComponent } from '../header/header-content/header-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
