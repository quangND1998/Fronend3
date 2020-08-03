import { Component, OnInit } from '@angular/core';

import {DetailRecipt} from '../DetailRecipt';
import {ReciptDetailService} from '../../recipt-detail.service';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-listcthdon',
  templateUrl: './listcthdon.component.html',
  styleUrls: ['./listcthdon.component.css']
})
export class ListcthdonComponent implements OnInit {

  public subscription : Subscription
  constructor(
  public  ReciptService : ReciptDetailService,
  public routerservice : Router,
  public activerouterservice: ActivatedRoute) { }
  public detailRecipts : DetailRecipt[]=[];
  sortBy ='name';
  sortValue= 1;

  ngOnInit() {
    this.subscription= this.ReciptService.getAllreciptDetail().subscribe(data =>{
      this.detailRecipts =data;
      console.log(data);
    });
  
   
  }
 
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }

  }

  onDeleteCourses(SoHD : string){
    this.subscription =this.ReciptService.DeletereciptDetail(SoHD).subscribe(data=>{
      this.UppdataAfferDelete(SoHD);
    })
  }
  UppdataAfferDelete(id : string){
    for(var i=0; i <this.detailRecipts.length;i++){
      if(this.detailRecipts[i].MaHDCT == id){
        console.log(i)
        this.detailRecipts.splice(i,1);
        break;
      }
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home']);
  }


}
