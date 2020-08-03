import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../../product.service';
import {FormBuilder ,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  public fromProduct : FormGroup;
  public subscription : Subscription
  constructor(
    public  ProductService : ProductService,
    public routerservice : Router,
    private _formBuilder :FormBuilder,
  ) { }
  public product : Product;

  ngOnInit(): void {
    this.product = new Product();
    this.creactForm();
  }
  onSubmitForm(){
    this.subscription = this.ProductService.onaddProduct(this.product).subscribe(data=>{
      if(data && data["MaSP"]){
        this.routerservice.navigate(['/products'])
      }
    })
    console.log(this.fromProduct)
  }
  creactForm(){
    this.fromProduct = this._formBuilder.group({
        MaSP :['',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
         
        ],
        TenSP :['',
        Validators.required,
        ],
        DVT :['',
        Validators.required

        ],
        MSTA :['',
        Validators.required
          
        ],
        

    })
  }
  onResetForm(){
    this.fromProduct.reset();
  }


}
