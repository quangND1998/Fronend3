import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {CoQuanThue} from '../coquanthue';
import {CoquanthueService} from '../../coquanthue.service';

@Component({
  selector: 'app-coquanthueedit',
  templateUrl: './coquanthueedit.component.html',
  styleUrls: ['./coquanthueedit.component.css']
})
export class CoquanthueeditComponent implements OnInit {
  public subscriptionPrama :Subscription;
  public subscription : Subscription;
  public taxAuthoritie1;
  
  constructor(
    public  productservice : CoquanthueService,
    public routerservice : Router,
    public activerouterservice: ActivatedRoute
  ) { }

   ngOnInit() {
    this.taxAuthoritie1 =new CoQuanThue();
     this.LoadDataProduct()

  }
  
  LoadDataProduct(){
    this.subscriptionPrama =this.activerouterservice.params.subscribe(data=>{
        let id =data['id'];
        console.log(id)
        this.subscription =this.productservice.getOneCoQuanThue(id).subscribe(data1=>{
          this.taxAuthoritie1 =data1;
          
        })
    })
  }
  onEditCourse(){
    this.subscription =this.productservice.UpdateCoQuanThue(this.taxAuthoritie1).subscribe(data=>{
      if(data && data['MaCQT'] ){
        this.routerservice.navigate(['/taxAuthorities']);// navigate lại router 'courses cũng nhận sự thay đổi router với nhau
      }
    })

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ComeBack(){
    this.routerservice.navigate(['/taxAuthorities'])
  }


}
