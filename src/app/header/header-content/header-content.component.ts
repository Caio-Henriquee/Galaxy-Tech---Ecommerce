import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {


  faUser = faUser;
  faCartShopping =faCartShopping;
  pesquisa = faMagnifyingGlass;

  search(e: Event){
    const target = e.target as HTMLInputElement; 
    const value = target.value
  }
}
