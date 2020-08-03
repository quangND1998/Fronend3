import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {MauHoaDon} from '../mauhoadon';
import {MauhoadonService} from '../../mauhoadon.service';

@Component({
  selector: 'app-mauhoadon',
  templateUrl: './mauhoadon.component.html',
  styleUrls: ['./mauhoadon.component.css']
})
export class MauhoadonComponent implements OnInit {

  public subscriptionPrama :Subscription;
  public subscription : Subscription;
  public recipt1 : MauHoaDon;
  public recipt1s : MauHoaDon[]=[];
  public TenKH :string ;

  public MaSTB : string;
  constructor(
    public  reciptService : MauhoadonService,
    public routerservice : Router,
    public activerouterservice: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipt1 =new MauHoaDon();

  }
  LoadDataProduct(id: string){
        this.subscription =this.reciptService.getOneProduct(id).subscribe(data1=>{
          this.recipt1 =data1;
          this.TenKH = this.recipt1[0].TenKH
          this.MaSTB =  this.recipt1[0].MaSTB
          console.log(this.MaSTB)
          
          this.recipt1s.push(this.recipt1);

        })
       
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home'])
  }
  TotalAfterVat(a){
    let sum = 0; 
    sum = a.Amount+(a.Amount *a.VAT)/100;
    return sum;
  }
  
  TotalProduct(){
    console.log(this.recipt1s)
    let tong =0;
    for(var i=0; i<this.recipt1s.length; i++){
     tong += this.TotalAfterVat(this.recipt1[i]);
    }
    console.log(tong)
    

  }
}

