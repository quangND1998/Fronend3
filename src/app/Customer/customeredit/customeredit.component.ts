import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Customer} from '../customer';
import {CustomersService} from '../../customers.service';
@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {
 
  public subscriptionPrama :Subscription;
  public subscription : Subscription;
  public customer1 : Customer;
  
  constructor(
    public  CustomersService : CustomersService,
    public routerservice : Router,
    public activerouterservice: ActivatedRoute
  ) { }

  ngOnInit() {
    this.customer1 =new Customer();
    this.LoadDataProduct1();

  }
  LoadDataProduct1(){
    this.subscriptionPrama =this.activerouterservice.params.subscribe(data=>{
        let id =data['id'];
        this.subscription =this.CustomersService.getOneCustomers(id).subscribe(data1=>{
          this.customer1 =data1;
          console.log(data)
          
        })
    })
  }
  onEditCourse(){
    this.subscription =this.CustomersService.UpdateCustomers(this.customer1).subscribe(data=>{
      if(data && data['MaKH'] ){
        console.log(data['MaKH'])
      
        this.routerservice.navigate(['/customers']);// navigate lại router 'courses cũng nhận sự thay đổi router với nhau
      }
    })

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ComeBack(){
    this.routerservice.navigate(['/customers'])
  }
  


}
