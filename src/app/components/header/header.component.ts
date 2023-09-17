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

  categories: string[] = ['Chaise', 'Étagère', 'Bureau'];

  toggleCatalogue(state: boolean) {
    this.isCatalogueOpen = state;
  }

  toggleUser(state: boolean) {
    this.isUserOpen = state;
  }

  toggleMenuSm() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
