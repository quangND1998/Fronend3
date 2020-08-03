import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public routerservice : Router) {
    
  }

  ngOnInit(): void {
  }
  onLogOut(){
    if(localStorage.getItem('user')){
      localStorage.removeItem('user');
      this.routerservice.navigate(['login'])// sau khi thoát dùng lệnh removeItem sẽ trả về thằng router login
    }
  }

}
