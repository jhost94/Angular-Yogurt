import { Component, OnInit } from '@angular/core';
import { STATUS } from 'src/app/services/models/status';
import { Flavours } from 'src/app/services/models/yogurt';
import { YogurtService } from 'src/app/services/yogurt.service';

@Component({
  selector: 'ygr-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  flavours: Flavours = [];
  status = STATUS.WAITING;

  constructor(private ygrService: YogurtService) { }

  ngOnInit(): void {
    this.getFlavoursList()
  }

  private getFlavoursList(){
    this.status = STATUS.PENDING;
    this.ygrService.getFlavours().subscribe(f => {
      this.flavours = f.data;
      this.status = STATUS.SUCCESS
    })
  }

}
