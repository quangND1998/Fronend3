
import { Component, OnInit } from '@angular/core';
import {SellerService} from '../../seller.service';
import {Subscription} from 'rxjs';
import { Seller } from '../seller';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-sellerlist',
  templateUrl: './sellerlist.component.html',
  styleUrls: ['./sellerlist.component.css']
})
export class SellerlistComponent implements OnInit {

  public subscription : Subscription
  constructor(
    public  sellerService : SellerService,
    public routerservice : Router,) { }
  public sellers : Seller[]=[];
  sortBy ='name';
  sortValue= 1;

  ngOnInit() {
   this.subscription= this.sellerService.getAllSeller().subscribe(data =>{
     this.sellers =data;
     console.log(data);
   });
  }
  
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }

  }
  onDeleteCourses(id : number){
    this.subscription =this.sellerService.DeleteSeller(id).subscribe(data=>{
      this.UppdataAfferDelete(id);
    })
  }
  UppdataAfferDelete(id : number){
    for(var i=0; i <this.sellers.length;i++){
      if(this.sellers[i].MSTA == id){
        this.sellers.splice(i,1);
        break;
      }
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home']);
  }
}
