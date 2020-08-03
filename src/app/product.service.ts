import { Injectable } from '@angular/core';

import {Product} from './SanPham/product';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
const pageAPi ='http://localhost:3000/productPagse'
@Injectable({
  providedIn: 'root'
})

export class ProductService {


  public API :string =  'http://localhost:3000/products'
  constructor(private http :HttpClient) { }
  getAllProduct() :Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }
  onaddProduct(seller : Product) :Observable<Product[]>{
    return this.http.post<Product[]>(this.API,seller);
  }
  DeleteProduct(MaSP :string) :  Observable<Product[]>{
    return this.http.delete<Product[]>(this.API+'/'+MaSP);
  }
  UpdateProduct(seller :Product) : Observable<Product[]>{
    return this.http.put<Product[]>(this.API+'/'+seller.MaSP,seller);
  }
  getOneProduct(MaSP :string) :Observable<Product>{
    return this.http.get<Product>(this.API+'/'+MaSP);
  }
  getAll(params): Observable<any> {
    return this.http.get(pageAPi, { params });
  }

}
