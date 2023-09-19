import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  p: number = 1;

  filters: string[] = [];

  items = [
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },

    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'salon',
      subTitle: 'salon de marque',
      height: 42,
      width: 45,
      price: 200.96,
      image: '../../../assets/images/home-img-1.jpg',
    },
  ];

  categories = [
    {
      name: 'Category',
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

  toggleFilter() {
    this.filterExpanded = !this.filterExpanded;
  }

  toggleAccordion(category: any) {
    category.expanded = !category.expanded;
  }

  toggleSubcategory(subcategory: any) {
    subcategory.selected = !subcategory.selected;
  }
}
