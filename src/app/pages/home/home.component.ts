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
      title: 'Chaise',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo architecto quidem ducimus beatae itaque ipsum quam sunt corporis, autem asperiores inventore quia quo, hic expedita? Eius, corrupti! Quidem, optio!',
      src: '../../../assets/images/home-img-1.jpg',
    },
    {
      title: 'Étagère',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo architecto quidem ducimus beatae itaque ipsum quam sunt corporis, autem asperiores inventore quia quo, hic expedita? Eius, corrupti! Quidem, optio!',
      src: '../../../assets/images/home-img-2.jpg',
    },
    {
      title: 'Bureau',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo architecto quidem ducimus beatae itaque ipsum quam sunt corporis, autem asperiores inventore quia quo, hic expedita? Eius, corrupti! Quidem, optio!',
      src: '../../../assets/images/home-img-3.jpg',
    },
    {
      title: 'Salon',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo architecto quidem ducimus beatae itaque ipsum quam sunt corporis, autem asperiores inventore quia quo, hic expedita? Eius, corrupti! Quidem, optio!',
      src: '../../../assets/images/home-img-4.jpg',
    },
    {
      title: 'Meuble',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo architecto quidem ducimus beatae itaque ipsum quam sunt corporis, autem asperiores inventore quia quo, hic expedita? Eius, corrupti! Quidem, optio!',
      src: '../../../assets/images/home-img-1.jpg',
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
