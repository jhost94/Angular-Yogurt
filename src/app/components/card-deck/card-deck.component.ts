import { Component, Input, OnInit } from '@angular/core';
import { NewsList } from 'src/app/services/models/news';
import { STATUS } from 'src/app/services/models/status';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'ygr-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  @Input('maxEntries') maxEntries: string = "0";
  newsList: NewsList = [];
  status = STATUS.WAITING;
  constructor(private newsService: NewsService) {
    
  }

  ngOnInit(): void {
    this.getNewsList();
  }

  private getNewsList(){
    this.status = STATUS.PENDING;
    this.newsService.getNewsList(+this.maxEntries)
      .subscribe(nlist => {
        this.newsList = nlist.data;
        this.status = STATUS.SUCCESS;
      });
  }

  partialNewsList(acc: number = 0, maxItems: number = 3): NewsList {
    return this.newsList.slice(acc, maxItems);
  }
}
