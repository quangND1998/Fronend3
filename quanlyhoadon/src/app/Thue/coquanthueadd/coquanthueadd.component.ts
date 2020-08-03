import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {CoQuanThue} from '../coquanthue';
import {CoquanthueService} from '../../coquanthue.service';
@Component({
  selector: 'app-coquanthueadd',
  templateUrl: './coquanthueadd.component.html',
  styleUrls: ['./coquanthueadd.component.css']
})
export class CoquanthueaddComponent implements OnInit {

  public subscription : Subscription
  constructor(
    public  CustomersService : CoquanthueService,
    public routerservice : Router
    ) { }
  public taxAuthoritie : CoQuanThue;

  ngOnInit() {
    this.taxAuthoritie =new CoQuanThue();//khởi tạo vì course đang null
  }
  onAddAuthoritie(){
    this.subscription =this.CustomersService.onaddCoQuanThue(this.taxAuthoritie).subscribe(data =>{
        if(data && data['MaCQT'] ){
          this.routerservice.navigate(['/taxAuthorities']);// navigate lại router 'courses
        }
    })
   
  }
}
