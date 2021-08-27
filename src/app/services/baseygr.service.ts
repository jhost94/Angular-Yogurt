import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseygrService {
  protected ROOT: string;
  

  constructor() {
    this.ROOT = "http://localhost:3000/api";
  }

}
