
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Customer/customers/customers.component';
import { CoquanthueComponent } from './Thue/coquanthue/coquanthue.component';
import { ReciptsComponent } from './Recipt/recipts/recipts.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { DxLookupModule } from "devextreme-angular";
import { DxButtonModule } from 'devextreme-angular';
/// service
import {CustomersService} from './customers.service';
import {CoquanthueService} from './coquanthue.service';
import {SellerService} from './seller.service';
import {ProductService} from './product.service';
import {ReciptDetailService} from './recipt-detail.service';
import {MauhoadonService} from './mauhoadon.service';
import {LoginService} from './login.service'
//Customer
import { CustomeraddComponent } from './Customer/customeradd/customeradd.component';
import { CustomereditComponent } from './Customer/customeredit/customeredit.component';
import { CustomerlistComponent } from './Customer/customerlist/customerlist.component';
//coquanthue

import { CoquanthuelistComponent } from './Thue/coquanthuelist/coquanthuelist.component';
import { CoquanthueaddComponent } from './Thue/coquanthueadd/coquanthueadd.component';
import { CoquanthueeditComponent } from './Thue/coquanthueedit/coquanthueedit.component';

//seller
import { SellerComponent } from './BenBan/seller/seller.component';
import { SelleraddComponent } from './BenBan/selleradd/selleradd.component';
import {SellerlistComponent} from './BenBan/sellerlist/sellerlist.component'
import { SellereditComponent } from './BenBan/selleredit/selleredit.component';
//Product
import { ProductComponent } from './SanPham/product/product.component';
import { ProductlistComponent } from './SanPham/productlist/productlist.component';
import { ProductdetailComponent } from './SanPham/productdetail/productdetail.component';
import { ProductaddComponent } from './SanPham/productadd/productadd.component';


import { ReciplistComponent } from './Recipt/reciplist/reciplist.component';
import { ReciptdetailComponent } from './Recipt/reciptdetail/reciptdetail.component';
import { ReciptaddComponent } from './Recipt/reciptadd/reciptadd.component';
import { ListcthdonComponent } from './CTHoaDon/listcthdon/listcthdon.component';
import { CthdaddComponent } from './CTHoaDon/cthdadd/cthdadd.component';
import { CthdeditComponent } from './CTHoaDon/cthdedit/cthdedit.component';
import { ChitiethoadonComponent } from './CTHoaDon/chitiethoadon/chitiethoadon.component';
import { MauhoadonComponent } from './Mau/mauhoadon/mauhoadon.component';
import { AuthGuard } from 'src/app/auth.guard';
//ReciptDetail
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';

const approutes :Routes =[  
  {
    path :'',
    redirectTo :'/login',
    pathMatch : 'full'
  },

    
  
    {
      path : 'home',
      component : HomeComponent,
      canActivate :[AuthGuard],
      
    },
 
      //canActivate :[AuthGuard],//router nào cần khóa thì có thuộc tính nà
  
      {
        path : 'taxAuthorities',
        component : CoquanthueComponent,//ng g guard auth tạo lớp bảo vệ 
        canActivate :[AuthGuard],
        children :[
          {
            path : "",
            component: CoquanthuelistComponent,
            canActivate :[AuthGuard]
    
          },
          {
            path : ":id/edit",
            component :CoquanthuelistComponent,
            canActivate :[AuthGuard]
          }
        ]
      },
      {
        path : 'sellers',
        component : SellerComponent,
        canActivate :[AuthGuard],//ng g guard auth tạo lớp bảo vệ 
        children :[
          {
            path : "",
            component: SellerlistComponent,
            canActivate :[AuthGuard],
          },
        
          {
            path : ":id/edit",
            component :SellerlistComponent,
            canActivate :[AuthGuard]
          },
        
        ]
      },

      {
        path : 'products',
        component : ProductComponent,
        canActivate :[AuthGuard],//ng g guard auth tạo lớp bảo vệ 
        children :[
          {
            path : "",
            component: ProductlistComponent,
            canActivate :[AuthGuard],
    
          },
          {
            path : ":id/edit",
            component :ProductlistComponent,
            canActivate :[AuthGuard]
          },
        ]
      },
    
      {
        path : 'customers',
        component : CustomersComponent,
        canActivate :[AuthGuard],//ng g guard auth tạo lớp bảo vệ 
        children :[
          {
            path : "",
            component: CustomerlistComponent,
            canActivate :[AuthGuard],
          },
          {
            path : ":id/edit",
            component :CustomereditComponent,
            canActivate :[AuthGuard]
          }
        ]
      },


    
      {
        path : 'recipts',
        component : ReciptsComponent,
        canActivate :[AuthGuard],//ng g guard auth tạo lớp bảo vệ 
        children :[
          {
            path : "",
            component: ReciplistComponent,
            canActivate :[AuthGuard],
          },
          {
            path : ":id/edit",
            component :ReciptdetailComponent,
            canActivate :[AuthGuard]
          },
        ]
      },
      
      {
        path : 'chitiethoadon',
        component : ChitiethoadonComponent,//ng g guard auth tạo lớp bảo vệ 
        canActivate :[AuthGuard],
        children :[
          {
            path : "",
            component: ListcthdonComponent,
            canActivate :[AuthGuard]
          },
          {
            path : ":MaHDCT/edit",
            component :ListcthdonComponent,
            canActivate :[AuthGuard]
          },
        ]
      },
            
      {
        path : 'mauhoadon',
        component : MauhoadonComponent,
        canActivate :[AuthGuard],//ng g guard auth tạo lớp bảo vệ 
        // children :[
        //   {
        //     path : "",
        //     component: ListcthdonComponent,
    
        //   },
        //   {
        //     path : ":MaHDCT/edit",
        //     component :ListcthdonComponent
        //   },
        // ]
      },
      {
        path : 'login',
        component : LoginComponent//ng g guard auth tạo lớp bảo vệ 
      },
      {
        path: 'register',
        component: RegisterComponent
      }

   
]
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CoquanthueComponent,
    ReciptsComponent,
    HomeComponent,
    CustomeraddComponent,
    CustomereditComponent,
    CustomerlistComponent,
    CoquanthuelistComponent,
    CoquanthueaddComponent,
    CoquanthueeditComponent,
    SellerComponent,
    SelleraddComponent,
    SellereditComponent,
    SellerlistComponent,
    ProductComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ProductaddComponent,
    ReciplistComponent,
    ReciptdetailComponent,
    ReciptaddComponent,
    ListcthdonComponent,
    CthdaddComponent,
    CthdeditComponent,
    ChitiethoadonComponent,
    MauhoadonComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxLookupModule,
    DxButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    NgxPaginationModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [CustomersService,CoquanthueService,SellerService,ProductService,ReciptDetailService,MauhoadonService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
