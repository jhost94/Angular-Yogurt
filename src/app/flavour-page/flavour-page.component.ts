import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STATUS } from '../services/models/status';
import { Flavours, Yogurt } from '../services/models/yogurt';
import { YogurtService } from '../services/yogurt.service';

@Component({
  selector: 'ygr-flavour-page',
  templateUrl: './flavour-page.component.html',
  styleUrls: ['./flavour-page.component.scss']
})
export class FlavourPageComponent implements OnInit {
  yogurt?: Yogurt;
  status = STATUS.WAITING;

  constructor(private route: ActivatedRoute, private service: YogurtService) {
  }
    
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.getFlavourInfo(param.get('flavour')!);
    })
  }

  private getFlavourInfo(flavour: string){
    this.status = STATUS.PENDING;
    this.service.getFlavour(flavour)
      .subscribe(flavour => {
        this.yogurt = flavour.data[0];
        this.status = STATUS.SUCCESS;
      });    
  }

  getImageName(){
    return this.yogurt?.imgPath.split('/')[this.yogurt?.imgPath.split('/').length - 1];
  }
}
