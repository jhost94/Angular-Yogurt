import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../services/models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'ygr-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news?:News;

  constructor(private service: NewsService, private router: ActivatedRoute) {
    router.paramMap.subscribe(param => {
      this.getNewsInfo(param.get('id')!);
    });
  }

  ngOnInit(): void {
  }

  getNewsInfo(id: string){
    this.service.getNewsInfo(id)
      .subscribe(n => {
        this.news = n.data[0];
      });
  }

  getImageName(): string{
    if(!this.news) return "";
    return this.news.imgPath.split('/')[this.news.imgPath.split('/').length - 1];
  }
}
