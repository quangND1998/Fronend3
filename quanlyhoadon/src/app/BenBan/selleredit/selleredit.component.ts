import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Seller} from '../seller';
import {SellerService} from '../../seller.service';

@Component({
  selector: 'app-selleredit',
  templateUrl: './selleredit.component.html',
  styleUrls: ['./selleredit.component.css']
})
export class SellereditComponent implements OnInit {
  public seller1 : Seller;
  public subscriptionPrama : Subscription;

  public subscription : Subscription;

  constructor(
    public sellerService : SellerService,
    public routerservice : Router,
    public activerouterservice : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.seller1 = new Seller();
    this.LoadDataSeller();

  }
  LoadDataSeller(){
    this.subscriptionPrama =this.activerouterservice.params.subscribe(data=>{
        let id =data['id'];
        console.log(id)
        this.subscription =this.sellerService.getOneSeller(id).subscribe(data1=>{
          this.seller1 =data1;
          console.log(data)
          
        })
    })
  }
  onEditSeller(){
    this.subscription = this.sellerService.UpdateSeller(this.seller1).subscribe(data=>{
      if(data && data['MSTA']){
        this.routerservice.navigate(['/sellers']);

      }
    })
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
