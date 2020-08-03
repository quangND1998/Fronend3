import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  public subscriptionPrama :Subscription;
  public subscription : Subscription;
  public product1 : Product;
  
  constructor(
    public  productservice : ProductService,
    public routerservice : Router,
    public activerouterservice: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product1 =new Product();
    this.LoadDataProduct();

  }
  LoadDataProduct(){
    this.subscriptionPrama =this.activerouterservice.params.subscribe(data=>{
        let id =data['id'];
        console.log(id)
        this.subscription =this.productservice.getOneProduct(id).subscribe(data1=>{
          this.product1 =data1;
          console.log(data)
          
        })
    })
  }
  onEditSeller(){
    this.subscription =this.productservice.UpdateProduct(this.product1).subscribe(data=>{
      if(data && data['MaSP'] ){
      
        this.routerservice.navigate(['/products']);// navigate lại router 'courses cũng nhận sự thay đổi router với nhau
      }
    })

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ComeBack(){
    this.routerservice.navigate(['/products'])
  }

}
