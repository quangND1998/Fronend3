import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Seller} from '../seller';
import {SellerService} from '../../seller.service';
import {FormBuilder ,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-selleradd',
  templateUrl: './selleradd.component.html',
  styleUrls: ['./selleradd.component.css']
})
export class SelleraddComponent implements OnInit {
  public formSellerAdd : FormGroup
  public subscription : Subscription
  constructor(
    public  SellerService : SellerService,
    public routerservice : Router,
    public _formBuilder : FormBuilder
  ) { }
  public seller : Seller;

  ngOnInit(): void {
    this.seller = new Seller();
    this.creactForm();
  }
  onAddSeller(){
    this.subscription = this.SellerService.onaddSeller(this.seller).subscribe(data=>{
      if(data && data["MSTA"]){
        this.routerservice.navigate(['/sellers'])
      }
    })
  }
  creactForm(){
    this.formSellerAdd = this._formBuilder.group({
      MSTA :['',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
         
        ],
        TenA :['',
        Validators.required,
        ],
        DiaChiA :['',
        Validators.required

        ],
        CKSA :['',
        Validators.required
          
        ],
        CKDTA :['',
        Validators.required

        ],
        MaCQT:['',
        Validators.required
      ]
        

    })
  }
  onResetForm(){
    this.formSellerAdd.reset();
  }


}
