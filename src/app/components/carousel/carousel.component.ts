import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';
import { Slideshow } from 'src/app/services/models/slideshow';
import { STATUS } from 'src/app/services/models/status';


@Component({
  selector: 'ygr-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  status = STATUS.WAITING;
  images: Slideshow = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.getImages();
  }

  private getImages(){
    this.status = STATUS.PENDING;
    this.carouselService.getCarouselImages()
      .subscribe(images => {
        this.images = images;
        this.status = STATUS.SUCCESS;
      });
  }

  getImageName(image: string) {
    return image.split('/')[image.split('/').length -1];
  }
}
