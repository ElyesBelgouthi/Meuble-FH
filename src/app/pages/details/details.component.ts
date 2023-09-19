import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  currentImage: string = 'product-image-1.jpg';

  changeImage(imageName: string) {
    this.currentImage = imageName;
  }
}
