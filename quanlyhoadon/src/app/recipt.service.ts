import { Injectable } from '@angular/core';
import {Recipt} from './Recipt/recipt';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReciptService {

  public API :string =  'http://localhost:3000/recipts'
  constructor(public http :HttpClient) { }
  getAllrecipts() :Observable<Recipt[]>{
    return this.http.get<Recipt[]>(this.API);
  }
  onaddrecipts(recipt : Recipt) :Observable<Recipt[]>{
    return this.http.post<Recipt[]>(this.API,recipt);
  }
  Deleterecipts(id :number) :  Observable<Recipt[]>{
    return this.http.delete<Recipt[]>(this.API+'/'+id);
  }
  Updaterecipts(recipt :Recipt) : Observable<Recipt[]>{
    return this.http.put<Recipt[]>(this.API+'/'+recipt.SoHD,recipt);
  }
  getOnerecipts(SoHD :number) :Observable<Recipt>{
    return this.http.get<Recipt>(this.API+'/'+SoHD);
  }
}
