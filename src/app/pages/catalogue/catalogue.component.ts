import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ImageService } from 'src/app/services/image.service';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  p: number = 1;
  items!: Item[];
  imagesSrc: any = {};
  isLoading = true;
  filters = [
    {
      name: 'Categorie',
      extended: false,
      subcategories: [
        { name: 'Chaise', selected: false },
        { name: 'Bureau', selected: false },
        { name: 'Comptoir', selected: false },
        { name: 'Etagère', selected: false },
      ],
    },
    {
      name: 'Type',
      expanded: false,
      subcategories: [
        { name: 'Moderne', selected: false },
        { name: 'Classique', selected: false },
      ],
    },
  ];
  filterExpanded: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params) {
        this.updateSubcategories(params['categories'], params['types']);
      }
      this.itemService.getItems(params).subscribe((items: Item[]) => {
        this.items = items;
        for (let item of items) {
          if (item && item.photos && item.photos.length > 0) {
            this.imageService.getImage(item.photos[0].path).subscribe(
              (imageData) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                  this.imagesSrc[item.id] = e.target?.result;
                };
                reader.readAsDataURL(imageData);
              },
              (error) => {}
            );
          }
        }
        this.isLoading = false; // Set isLoading to false once data is loaded
      });
    });
  }
  toggleFilter() {
    this.filterExpanded = !this.filterExpanded;
  }

  toggleAccordion(category: any) {
    category.expanded = !category.expanded;
  }

  toggleSubcategory(subcategory: any) {
    subcategory.selected = !subcategory.selected;
    this.setURLQueryParams();
  }

  reloadPage() {
    const newUrl = window.location.pathname;
    window.history.replaceState({}, '', newUrl);

    // Reload the page
    window.location.reload();
  }

  updateSubcategories(categories: any, types: any) {
    if (categories && categories?.length > 0) {
      this.filters[0].subcategories.forEach((Element) => {
        if (categories.split(',').indexOf(Element.name) !== -1) {
          Element.selected = true;
        } else {
          Element.selected = false;
        }
      });
    }
    if (types && types?.length > 0) {
      this.filters[1].subcategories.forEach((Element) => {
        if (types.split(',').indexOf(Element.name) !== -1) {
          Element.selected = true;
        } else {
          Element.selected = false;
        }
      });
    }
  }

  setURLQueryParams(): void {
    const categories: string = this.filters[0].subcategories
      .filter((subcategory: any) => subcategory.selected)
      .map((subcategory: any) => subcategory.name)
      .join(',');
    const types: string = this.filters[1].subcategories
      .filter((subcategory: any) => subcategory.selected)
      .map((subcategory: any) => subcategory.name)
      .join(',');

    const queryParams = {
      categories: categories.length > 0 ? categories : [],
      types: types.length > 0 ? types : [],
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
