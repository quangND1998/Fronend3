import { Injectable } from '@angular/core';
import {MauHoaDon} from './Mau/mauhoadon';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MauhoadonService {
  public API :string =  'http://localhost:3000/xuathoadon'
  constructor(public http :HttpClient) { }
  // getAllProduct() :Observable<MauHoaDon[]>{
  //   return this.http.get<MauHoaDon[]>(this.API);
  // }
  // onaddProduct(seller : MauHoaDon) :Observable<MauHoaDon[]>{
  //   return this.http.post<MauHoaDon[]>(this.API,seller);
  // }
  // DeleteProduct(MaSP :string) :  Observable<MauHoaDon[]>{
  //   return this.http.delete<MauHoaDon[]>(this.API+'/'+MaSP);
  // }
  // UpdateProduct(seller :MauHoaDon) : Observable<MauHoaDon[]>{
  //   return this.http.put<MauHoaDon[]>(this.API+'/'+seller.MaSTB,seller);
  // }
  getOneProduct(MSTB :string) :Observable<MauHoaDon>{
    return this.http.get<MauHoaDon>(this.API+'/'+MSTB);
  }

}
