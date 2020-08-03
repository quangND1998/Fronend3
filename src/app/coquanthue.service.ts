import { Injectable } from '@angular/core';

import {CoQuanThue} from './Thue/coquanthue';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoquanthueService {
  public API :string =  'http://localhost:3000/TaxAuthorities'
  constructor(public http :HttpClient) { }
  getAllCoQuanThue() :Observable<CoQuanThue[]>{
    return this.http.get<CoQuanThue[]>(this.API);
  }
  onaddCoQuanThue(customer : CoQuanThue) :Observable<CoQuanThue[]>{
    return this.http.post<CoQuanThue[]>(this.API,customer);
  }
  DeleteCoQuanThue(id :string) :  Observable<CoQuanThue[]>{
    return this.http.delete<CoQuanThue[]>(this.API+'/'+id);
  }
  UpdateCoQuanThue(customer :CoQuanThue) : Observable<CoQuanThue[]>{
    return this.http.put<CoQuanThue[]>(this.API+'/'+customer.MaCQT,customer);
  }
  getOneCoQuanThue(MaCQT :string) :Observable<CoQuanThue>{
    return this.http.get<CoQuanThue>(this.API+'/'+MaCQT);
  }
}
