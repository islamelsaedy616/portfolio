import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarouselModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    navText: ['', ''],
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 900,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 12,
      },
      640: {
        items: 2,
        margin: 14,
      },
      768: {
        items: 3,
        margin: 18,
      },
      1024: {
        items: 3,
        margin: 22,
      },
      1400: {
        items: 4,
        margin: 26,
      },
    },
    nav: false,
  };
}
