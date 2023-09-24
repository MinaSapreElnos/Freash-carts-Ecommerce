import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  numOfCartItems:number=0

  constructor(public _AuthServiceService:AuthServiceService,private _ProductsService:ProductsService){
    this._ProductsService.numOfCartItems.subscribe({
      next:(value)=>{
        console.log(value)
        this.numOfCartItems=value
      }
    })
  }



  logOut(){
    this._AuthServiceService.logOut()
  }

}
