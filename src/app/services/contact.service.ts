import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseygrService } from './baseygr.service';
import { ContactBody, ContactResponse } from './models/contacts';
import { Posts } from './models/posts';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseygrService{
  private contactURL:string;
  constructor(private http: HttpClient) {
    super()
    this.contactURL = this.ROOT + "/contact";
  }

  postContact(contact: ContactBody): Observable<Posts<ContactResponse>>{
    return this.http.post<Posts<ContactResponse>>(this.contactURL, contact);
  }
}
