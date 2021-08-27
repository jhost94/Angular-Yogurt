import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseygrService } from './baseygr.service';
import { Slideshow } from './models/slideshow';

@Injectable({
  providedIn: 'root'
})
export class CarouselService extends BaseygrService {
  private slideshowURL: string;

  constructor(private http: HttpClient) {
    super();    
    this.slideshowURL = this.ROOT + "/slideshow";
  }
  
  
  public getCarouselImages(): Observable<Slideshow>{
    return this.http.get<Slideshow>(this.slideshowURL);
  }  
}
