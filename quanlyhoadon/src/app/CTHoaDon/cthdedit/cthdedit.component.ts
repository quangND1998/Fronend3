import { Component, OnInit } from '@angular/core';

import {DetailRecipt} from '../DetailRecipt';
import {ReciptDetailService} from '../../recipt-detail.service';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-cthdedit',
  templateUrl: './cthdedit.component.html',
  styleUrls: ['./cthdedit.component.css']
})
export class CthdeditComponent implements OnInit {
  public subscriptionPrama :Subscription;
  public subscription : Subscription;
  public recipt1 : DetailRecipt;
  
  constructor(
    public  reciptService : ReciptDetailService,
    public routerservice : Router,
    public activerouterservice: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipt1 =new DetailRecipt();
    this.LoadDataProduct();

  }
  LoadDataProduct(){
    this.subscriptionPrama =this.activerouterservice.params.subscribe(data=>{
        let id =data['MaHDCT'];
        this.subscription =this.reciptService.getOnereciptDetail(id).subscribe(data1=>{
          this.recipt1 =data1;
          console.log(data)
          
        })
    })
  }
  onEditRecipt(){
    this.subscription =this.reciptService.UpdatereciptDetail(this.recipt1).subscribe(data=>{
      if(data && data['MaHDCT'] ){
        console.log(data)
      
        this.routerservice.navigate(['/chitiethoadon']);// navigate lại router 'courses cũng nhận sự thay đổi router với nhau
      }
    })

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ComeBack(){
    this.routerservice.navigate(['/chitiethoadon'])
  }

}
