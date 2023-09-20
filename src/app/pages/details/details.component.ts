import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  currentImage: string = 'home-img-2.jpg';
  quantity: number = 1;

  selectedColor: string | null = null;

  colors = ['color-1.jpg', 'color-2.jpg', 'color-3.png'];

  changeImage(imageName: string) {
    this.currentImage = imageName;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  increment(mode: boolean) {
    if (mode) {
      this.quantity++;
    } else if (this.quantity > 1) {
      this.quantity--;
    }
    console.log(this.quantity);
  }
}
