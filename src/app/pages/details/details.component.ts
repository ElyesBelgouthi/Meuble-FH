import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { ItemCart } from 'src/app/models/item-cart.model';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentImage!: any;
  quantity!: number;
  item!: Item;
  id!: number;
  images: any[] = [];
  selectedColor: string = '';
  isLoading = true;
  selectedDimension: number = 0;
  colorImages: any[] = [];
  colors!: Color[];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private imageService: ImageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.isLoading = true; // Set isLoading to true initially
    this.quantity = 1;

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if (this.id) {
      this.itemService.getItemById(this.id).subscribe(
        (item: Item) => {
          this.item = item;
          if (this.item) {
            this.colors = this.item.colors;
            if (this.item.photos && this.item.photos.length > 0) {
              let loadedImageCount = 0;
              for (let photo of this.item.photos) {
                this.imageService.getImage(photo.path).subscribe(
                  (imageData) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      this.images.push(e.target?.result);
                      loadedImageCount++;
                      if (loadedImageCount === this.item.photos.length) {
                        this.setInitialCurrentImage();
                        this.isLoading = false; // Set isLoading to false when all images are loaded
                      }
                    };
                    reader.readAsDataURL(imageData);
                  },
                  (error) => {
                    // Handle image loading error
                    loadedImageCount++; // Increment loadedImageCount even on error
                    if (loadedImageCount === this.item.photos.length) {
                      this.isLoading = false; // Set isLoading to false if all images are loaded or errored
                    }
                  }
                );
              }
            } else {
              // If there are no photos, set currentImage immediately and isLoading to false
              this.setInitialCurrentImage();
              this.isLoading = false;
            }

            if (this.colors && this.colors.length > 0) {
              for (let color of this.colors) {
                this.imageService.getImage(color.path).subscribe(
                  (imageData) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      this.colorImages[color.id] = e.target?.result;
                    };
                    reader.readAsDataURL(imageData);
                  },
                  (error) => {
                    // Handle color image loading error
                  }
                );
              }
            } else {
              // If there are no colors, set isLoading to false immediately
              this.isLoading = false;
            }
          }
        },
        (error) => {
          // Handle itemService error
          this.isLoading = false; // Set isLoading to false on error
        }
      );
    }
  }

  changeQuantity(event: any) {
    this.quantity = parseInt(event.target.value);
  }
  setInitialCurrentImage(): void {
    // Set the initial currentImage
    if (this.images.length > 0) {
      this.currentImage = this.images[0];
    }
  }

  selectDimension(index: number) {
    this.selectedDimension = index;
  }

  changeImage(index: number) {
    this.currentImage = this.images[index];
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  addToCart() {
    this.cartService.addToCart(
      new ItemCart(
        this.item.reference,
        this.item.title,
        this.quantity,
        this.selectedColor,
        this.item.dimensions[this.selectedDimension].name,
        this.item.dimensions[this.selectedDimension].price * this.quantity,
        this.item.dimensions[this.selectedDimension].price,
        this.item.photos[0].path,
        this.item.id
      )
    );
  }
}
