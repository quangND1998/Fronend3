import { Component, OnInit } from '@angular/core';
import {CoquanthueService} from '../../coquanthue.service';
import {Subscription} from 'rxjs';
import { CoQuanThue } from '../coquanthue'
import {Router ,ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-coquanthuelist',
  templateUrl: './coquanthuelist.component.html',
  styleUrls: ['./coquanthuelist.component.css']
})
export class CoquanthuelistComponent implements OnInit {

  public subscription : Subscription
  constructor(
    public  CoquanthueService : CoquanthueService,
    public routerservice : Router,) { }
    public taxAuthorities : CoQuanThue[]=[];
  sortBy ='name';
  sortValue= 1;

  ngOnInit() {
   this.subscription= this.CoquanthueService.getAllCoQuanThue().subscribe(data =>{
     this.taxAuthorities =data;
     console.log(data);
   });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }

  }
  onDeleteCourses(id : string){
    this.subscription =this.CoquanthueService.DeleteCoQuanThue(id).subscribe(data=>{
      this.UppdataAfferDelete(id);
    })
  }
  UppdataAfferDelete(id : string){
    for(var i=0; i <this.taxAuthorities.length;i++){
      if(this.taxAuthorities[i].MaCQT == id){
        this.taxAuthorities.splice(i,1);
        break;
      }
    }
  }
  ComebackHome(){
    this.routerservice.navigate(['/home']);
  }

}
