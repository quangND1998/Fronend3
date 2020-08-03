import { Injectable } from '@angular/core';
import {Seller} from './BenBan/seller';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  public API :string =  'http://localhost:3000/sellers'
  constructor(public http :HttpClient) { }
  getAllSeller() :Observable<Seller[]>{
    return this.http.get<Seller[]>(this.API);
  }
  onaddSeller(seller : Seller) :Observable<Seller[]>{
    return this.http.post<Seller[]>(this.API,seller);
  }
  DeleteSeller(id :number) :  Observable<Seller[]>{
    return this.http.delete<Seller[]>(this.API+'/'+id);
  }
  UpdateSeller(seller :Seller) : Observable<Seller[]>{
    return this.http.put<Seller[]>(this.API+'/'+seller.MSTA,seller);
  }
   getOneSeller(id :number) :Observable<Seller>{
    return this.http.get<Seller>(this.API+'/'+id);
  }
}
