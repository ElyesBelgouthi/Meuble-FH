import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  slideNumber: number = 0;
  slides = [
    {
      title: 'Meuble',
      description:
        'Bienvenue sur Meuble FH, votre source incontournable pour des chaises, bureaux, comptoirs et étagères de qualité supérieure. Notre collection est soigneusement sélectionnée pour répondre à tous vos besoins en matière de mobilier, que ce soit pour la maison ou le bureau.',
      routeTo: ['catalogue'],
      src: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'Chaises Confortables',
      description:
        'Découvrez notre gamme exceptionnelle de chaises conçues pour offrir un confort exceptionnel. Que vous recherchiez des chaises de salle à manger élégantes, des chaises de bureau ergonomiques ou des fauteuils confortables pour votre salon, nous avons une variété de styles et de designs pour satisfaire vos goûts.',
      routeTo: ['catalogue'],
      queryParams: { categories: 'Chaise' },
      src: '../../../assets/images/home-img-7.jpg',
    },
    {
      title: 'Bureaux Fonctionnels',
      description:
        'Nos bureaux sont conçus pour vous offrir un espace de travail fonctionnel et inspirant. De bureaux élégants pour votre bureau à domicile à des bureaux réglables en hauteur pour une ergonomie maximale, notre sélection de bureaux vous aidera à rester productif et organisé.',
      routeTo: ['catalogue'],
      queryParams: { categories: 'Bureau' },

      src: '../../../assets/images/home-img-5.jpg',
    },
    {
      title: 'Comptoirs Élégants',
      description:
        'Les comptoirs sont le point central de nombreuses cuisines et espaces de réception. Chez Meuble FH, nous proposons une gamme de comptoirs en différents matériaux et finitions pour répondre à vos besoins. Créez une ambiance élégante dans votre cuisine avec nos comptoirs sur mesure et élégants.',
      routeTo: ['catalogue'],
      queryParams: { categories: 'Comptoir' },

      src: '../../../assets/images/home-img-6.jpg',
    },
    {
      title: 'Étagères Pratiques',
      description:
        "L'organisation est la clé de tout espace bien aménagé. Explorez nos étagères polyvalentes conçues pour maximiser le stockage tout en ajoutant une touche de style à votre décor. Des étagères murales modernes aux étagères modulaires, nous avons la solution d'étagère parfaite pour vous.",
      routeTo: ['catalogue'],
      queryParams: { categories: 'Etagère' },

      src: '../../../assets/images/home-img-4.jpg',
    },
  ];

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  toggleSlideNumber(num: number) {
    this.slideNumber = num;
  }

  nextSlide() {
    this.slideNumber = (this.slideNumber + 1) % this.slides.length;
  }
}
