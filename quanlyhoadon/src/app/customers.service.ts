import { Injectable } from '@angular/core';
import {Customer} from './Customer/customer';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public API :string =  'http://localhost:3000/customers'
  constructor(public http :HttpClient) { }
  getAllCustomers() :Observable<Customer[]>{
    return this.http.get<Customer[]>(this.API);
  }
  onaddCustomers(customer : Customer) :Observable<Customer[]>{
    return this.http.post<Customer[]>(this.API,customer);
  }
  DeleteCustomers(MaKH :number) :  Observable<Customer[]>{
    return this.http.delete<Customer[]>(this.API+'/'+MaKH);
  }
  UpdateCustomers(customer :Customer) : Observable<Customer[]>{
    return this.http.put<Customer[]>(this.API+'/'+customer.MaKH,customer);
  }
  getOneCustomers(MaKH :number) :Observable<Customer>{
    return this.http.get<Customer>(this.API+'/'+MaKH);
  }
}
