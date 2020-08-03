import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Customer} from '../customer';
import {CustomersService} from '../../customers.service';
@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  public subscription : Subscription
  constructor(
    public  CustomersService : CustomersService,
    public routerservice : Router
    ) { }
  public customer: Customer;
  
    
  ngOnInit() {
    this.customer =new Customer();//khởi tạo vì course đang null
    
  }
  onAddCourse(){
    this.subscription =this.CustomersService.onaddCustomers(this.customer).subscribe(data =>{
        if(data && data['MaKH'] ){
          this.routerservice.navigate(['/customer']);// navigate lại router 'courses
        }
    })
   
  }
}
