import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseygrService } from './baseygr.service';
import { Posts } from './models/posts';
import { Flavours, Yogurt } from './models/yogurt';

@Injectable({
  providedIn: 'root'
})
export class YogurtService extends BaseygrService{
  private ygrURL: string;
  private flavoursURL: string;

  constructor(private http: HttpClient) {
    super()
    this.ygrURL = this.ROOT + "/yogurts"
    this.flavoursURL = this.ygrURL + "/flavours";
  }

  getFlavours(): Observable<Posts<Flavours>>{
    return this.http.get<Posts<Flavours>>(this.flavoursURL);
  }

  getFlavour(flavour: string): Observable<Posts<Yogurt[]>>{
    return this.http.get<Posts<Yogurt[]>>(this.flavoursURL + "/" + flavour);
  }
}
