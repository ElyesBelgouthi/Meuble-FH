import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { Item } from 'src/app/models/item.model';
import { ImageService } from 'src/app/services/image.service';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentImage!: any;
  quantity: number = 1;
  item!: Item;
  id!: number;
  images: any[] = [];
  selectedColor: string | null = null;
  isLoading = true;
  // colors = ['color-1.jpg', 'color-2.jpg', 'color-3.png'];
  colorImages: any[] = [];
  colors!: Color[];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.isLoading = true; // Set isLoading to true initially

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

  setInitialCurrentImage(): void {
    // Set the initial currentImage
    if (this.images.length > 0) {
      this.currentImage = this.images[0];
    }
  }

  changeImage(index: number) {
    this.currentImage = this.images[index];
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
