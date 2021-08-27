import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { ContactBody } from '../services/models/contacts';
import { STATUS } from '../services/models/status';

@Component({
  selector: 'ygr-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contact: ContactBody;
  status = STATUS.WAITING;

  contacts = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'subject': new FormControl('', [
      Validators.required
    ]),
    'message': new FormControl('', [
      Validators.required
    ])
  })

  constructor(private contactService: ContactService) {
    this.contact = {
      email: "",
      subject: "",
      message: ""
    };
  }

  ngOnInit(): void {
  }

  onClick(){
    this.status = STATUS.PENDING;
    this.contactService.postContact(this.contact)
      .subscribe(res => {
        if (res.status === "SUCCESS") {
          this.status = STATUS.SUCCESS;
        } else {
          this.status = STATUS.ERROR;
        }
        //console.log(res);
        setTimeout(() => {
          this.status = STATUS.WAITING;
        }, 2000);
      });
  }

  get email(){
    return this.contacts.get('email') as AbstractControl;
  }
  
  get subject(){
    return this.contacts.get('subject') as AbstractControl;
  }

  get message(){
    return this.contacts.get('message') as AbstractControl;
  }
}
