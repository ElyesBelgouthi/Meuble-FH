import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCatalogueOpen: boolean = false;
  isMenuOpen: boolean = false;
  isUserOpen: boolean = false;

  userActions: string[] = ['Se connecter', 'Créer un compte'];

  categories: string[] = ['Chaise', 'Etagère', 'Bureau', 'Comptoir'];
  cartSize: number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartSize = this.cartService.getCartSize();

    this.cartService.cartUpdated.subscribe((size: number) => {
      this.cartSize = size;
    });
  }

  toggleCatalogue(state: boolean) {
    this.isCatalogueOpen = state;
  }

  toggleMenuSm() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
