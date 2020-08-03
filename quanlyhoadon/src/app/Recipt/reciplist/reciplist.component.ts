import { Component, OnInit } from '@angular/core';
import {Recipt} from '../recipt';
import {ReciptService} from '../../recipt.service';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-reciplist',
  templateUrl: './reciplist.component.html',
  styleUrls: ['./reciplist.component.css']
})
export class ReciplistComponent implements OnInit {
  public subscription : Subscription
  constructor(
  public  ReciptService : ReciptService,
  public routerservice : Router,
  public activerouterservice: ActivatedRoute) { }
  public recipts : Recipt[]=[];
  sortBy ='name';
  sortValue= 1;

  ngOnInit() {
    this.subscription= this.ReciptService.getAllrecipts().subscribe(data =>{
      this.recipts =data;
      console.log(data);
    });
  
   
  }
 
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }

  }

  onDeleteCourses(SoHD : number){
    this.subscription =this.ReciptService.Deleterecipts(SoHD).subscribe(data=>{
      this.UppdataAfferDelete(SoHD);
    })
  }
  UppdataAfferDelete(id : number){
    for(var i=0; i <this.recipts.length;i++){
      if(this.recipts[i].SoHD == id){
        console.log(i)
        this.recipts.splice(i,1);
        break;
      }
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home']);
  }

}
