import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseygrService } from './baseygr.service';
import { News, NewsList } from './models/news';
import { Posts } from './models/posts';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseygrService{
  private newsURL:string;

  constructor(private http: HttpClient) {
    super()
    this.newsURL = this.ROOT + "/posts";
  }

  getNewsList(maxNews?: number): Observable<Posts<NewsList>>{
    if (maxNews){
      return this.http.get<Posts<NewsList>>(this.newsURL, {
        params: {
          size: maxNews
        }
      });
    }
    return this.http.get<Posts<NewsList>>(this.newsURL);
  }

  getNewsInfo(id: string): Observable<Posts<News[]>>{
    return this.http.get<Posts<News[]>>(this.newsURL + "/" + id)
  }
}
