import { Component } from '@angular/core';
import { HeaderContentComponent } from '../header/header-content/header-content.component';
import { NavbarContentComponent } from '../navbar/navbar-content/navbar-content.component';
import { SectionContentComponent } from '../section/section-content/section-content.component';
import { RouterOutlet } from '@angular/router'




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderContentComponent, NavbarContentComponent,SectionContentComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
