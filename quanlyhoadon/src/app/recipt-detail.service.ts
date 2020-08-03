import { Injectable } from '@angular/core';
import {DetailRecipt} from './CTHoaDon/DetailRecipt';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReciptDetailService {


  public API :string =  'http://localhost:3000/detailRecipts'
  constructor(public http :HttpClient) { }
  getAllreciptDetail() :Observable<DetailRecipt[]>{
    return this.http.get<DetailRecipt[]>(this.API);
  }
  onaddreciptDetail(reciptdetail : DetailRecipt) :Observable<DetailRecipt[]>{
    return this.http.post<DetailRecipt[]>(this.API,reciptdetail);
  }
  DeletereciptDetail(id :string) :  Observable<DetailRecipt[]>{
    return this.http.delete<DetailRecipt[]>(this.API+'/'+id);
  }
  UpdatereciptDetail(reciptdetail :DetailRecipt) : Observable<DetailRecipt[]>{
    return this.http.put<DetailRecipt[]>(this.API+'/'+reciptdetail.MaHDCT,reciptdetail);
  }
  getOnereciptDetail(MaHDCT :string) :Observable<DetailRecipt>{
    return this.http.get<DetailRecipt>(this.API+'/'+MaHDCT);
  }
}
