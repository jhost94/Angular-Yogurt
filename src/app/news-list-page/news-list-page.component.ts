import { Component, OnInit } from '@angular/core';
import { NewsList } from '../services/models/news';

@Component({
  selector: 'ygr-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {
  newsList: NewsList = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
