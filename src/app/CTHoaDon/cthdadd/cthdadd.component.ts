import { Component, OnInit } from '@angular/core';

import {DetailRecipt} from '../DetailRecipt';
import {ReciptDetailService} from '../../recipt-detail.service';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-cthdadd',
  templateUrl: './cthdadd.component.html',
  styleUrls: ['./cthdadd.component.css']
})
export class CthdaddComponent implements OnInit {

  public subscription : Subscription
  constructor(
    public  ProductService : ReciptDetailService,
    public routerservice : Router
  ) { }
  public product : DetailRecipt;

  ngOnInit(): void {
    this.product = new DetailRecipt();
  }
  onAddProduct(){

    this.subscription = this.ProductService.onaddreciptDetail(this.product).subscribe(data=>{
      if(data && data["MaHDCT"]){
        this.routerservice.navigate(['/chitiethoadon'])
      }
    })
  }

}
