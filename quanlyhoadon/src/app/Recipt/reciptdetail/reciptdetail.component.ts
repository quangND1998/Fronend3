import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Recipt} from '../recipt';
import {ReciptService} from '../../recipt.service';
@Component({
  selector: 'app-reciptdetail',
  templateUrl: './reciptdetail.component.html',
  styleUrls: ['./reciptdetail.component.css']
})
export class ReciptdetailComponent implements OnInit {

  public subscriptionPrama :Subscription;
  public subscription : Subscription;
  public recipt1 : Recipt;
  
  constructor(
    public  reciptService : ReciptService,
    public routerservice : Router,
    public activerouterservice: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipt1 =new Recipt();
    this.LoadDataProduct();

  }
  LoadDataProduct(){
    this.subscriptionPrama =this.activerouterservice.params.subscribe(data=>{
        let id =data['id'];
        this.subscription =this.reciptService.getOnerecipts(id).subscribe(data1=>{
          this.recipt1 =data1;
          console.log(data)
          
        })
    })
  }
  onEditRecipt(){
    this.subscription =this.reciptService.Updaterecipts(this.recipt1).subscribe(data=>{
      if(data && data['SoHD'] ){
        console.log(data)
      
        this.routerservice.navigate(['/recipts']);// navigate lại router 'courses cũng nhận sự thay đổi router với nhau
      }
    })

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ComeBack(){
    this.routerservice.navigate(['/recipts'])
  }

}
