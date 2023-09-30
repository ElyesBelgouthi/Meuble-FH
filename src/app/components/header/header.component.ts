import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isCatalogueOpen: boolean = false;
  isMenuOpen: boolean = false;
  isUserOpen: boolean = false;

  userActions: string[] = ['Se connecter', 'Créer un compte'];

  categories: string[] = ['Chaise', 'Étagère', 'Bureau', 'Comptoir'];

  toggleCatalogue(state: boolean) {
    this.isCatalogueOpen = state;
  }

  toggleMenuSm() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
