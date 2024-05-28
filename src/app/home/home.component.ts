import { Component } from '@angular/core';
import { HeaderContentComponent } from '../header/header-content/header-content.component';
import { NavbarContentComponent } from '../navbar/navbar-content/navbar-content.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderContentComponent, NavbarContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
