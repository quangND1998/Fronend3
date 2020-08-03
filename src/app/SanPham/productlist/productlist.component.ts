import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../../product.service';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public subscription : Subscription
  constructor(
  public  ProductService : ProductService,
  public routerservice : Router,
  public activerouterservice: ActivatedRoute) { }
  public products : Product[]=[];
  sortBy ='name';
  sortValue= 1;
  newcustomer ={}
  /////
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  page = 0;
  count = 0;
  pageSize = 0;
  pageSizes = [3,6,9];

  ngOnInit() {
    this.subscription= this.ProductService.getAllProduct().subscribe(data =>{
      this.products =data;
      console.log(data);
    });
  
   
  }
 
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }

  }

  onDeleteCourses(MaSP : string){
    this.subscription =this.ProductService.DeleteProduct(MaSP).subscribe(data=>{
      this.UppdataAfferDelete(MaSP);
    })
  }
  UppdataAfferDelete(id : string){
    for(var i=0; i <this.products.length;i++){
      if(this.products[i].MaSP == id){
        console.log(i)
        this.products.splice(i,1);
        break;
      }
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home']);
  }
  ///
  getRequestParams(pageSize, page) {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (pageSize) {
      params[`size`] = pageSize;

    }

    if (page) {
      params[`page`] = page;
    }
    

    return params;
  }

  retrieveTutorials() {
    let params = this.getRequestParams(this.pageSize, this.page);
    this.ProductService.getAll(params)
      .subscribe(
        response => {
          const { tutorials, totalItems } = response;
          this.tutorials = tutorials;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }


}
