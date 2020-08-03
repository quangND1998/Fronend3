import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Recipt} from '../recipt';
import {ReciptService} from '../../recipt.service';
import {FormBuilder ,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-reciptadd',
  templateUrl: './reciptadd.component.html',
  styleUrls: ['./reciptadd.component.css']
})
export class ReciptaddComponent implements OnInit {
  public fromRecipt : FormGroup;
  public subscription : Subscription
  constructor(
    public  ReciptService : ReciptService,
    public routerservice : Router,
    private _formBuilder :FormBuilder,
  ) { }
  public recipt : Recipt;

  ngOnInit(): void {
    this.recipt = new Recipt();
    this.creactForm()
  }
  onAddProduct(){

    this.subscription = this.ReciptService.onaddrecipts(this.recipt).subscribe(data=>{
      if(data && data["SoHD"]){
        this.routerservice.navigate(['/recipts'])
      }
    })
  }
  creactForm(){
    this.fromRecipt = this._formBuilder.group({
        SoHD :['',[
          Validators.required,
        ]
         
        ],
        MaKH :['',
        Validators.required,
        ],
        NgayLap :['',
        Validators.required

        ],
        TenHD :['',
        Validators.required
          
        ],
        
        KHHD :['',
        Validators.required

        ],
        KHMSHD :['',
        Validators.required
          
        ],
        VAT :['',
        Validators.required
          
        ],
        

    })
  }
  onResetForm(){
    this.fromRecipt.reset();
  }

}
