import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../customers.service';
import {Subscription} from 'rxjs';
import { Customer } from '../customer';
import {Router ,ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  public subscriptionPrama :Subscription;
  public subscription : Subscription
  constructor(
  public  CustomersService : CustomersService,
  public routerservice : Router,
  public activerouterservice: ActivatedRoute) { }
  public customers : Customer[]=[];
  sortBy ='name';
  sortValue= 1;

  ngOnInit() {
    this.subscription= this.CustomersService.getAllCustomers().subscribe(data =>{
      this.customers =data;
      console.log(data);
    });
  
   
  }
 
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }

  }

  onDeleteCourses(MaKH : number){
    this.subscription =this.CustomersService.DeleteCustomers(MaKH).subscribe(data=>{
      this.UppdataAfferDelete(MaKH);
    })
  }
  UppdataAfferDelete(id : number){
    for(var i=0; i <this.customers.length;i++){
      if(this.customers[i].MaKH == id){
        console.log(i)
        this.customers.splice(i,1);
        break;
      }
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home']);
  }
  
  
}
