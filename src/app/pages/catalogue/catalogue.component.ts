import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import ItemService from 'src/app/services/item.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  p: number = 1;

  items = this.itemService.items;
  filters = [
    {
      name: 'Categorie',
      extended: false,
      subcategories: [
        { name: 'Chaise', selected: false },
        { name: 'Bureau', selected: false },
        { name: 'Comptoir', selected: false },
        { name: 'Étagère', selected: false },
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
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params) {
        this.updateSubcategories(params['categories'], params['types']);
      }
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
