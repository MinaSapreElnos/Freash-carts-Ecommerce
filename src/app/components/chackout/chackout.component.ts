import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-chackout',
  templateUrl: './chackout.component.html',
  styleUrls: ['./chackout.component.css']
})
export class ChackoutComponent {
  cartId:string=''
  constructor(private _ProductsService :ProductsService , private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.paramMap.subscribe((pram)=>{
      this.cartId=pram.get('cartId')||''
    })
  }

  addreasForm:FormGroup=new FormGroup({
    details:new FormControl(),
    phone:new FormControl(),
    city:new FormControl()

  })

  chackout(){
    console.log( this.addreasForm.value)
    this._ProductsService.chackOut(this.addreasForm.value,this.cartId).subscribe((res)=>{
      console.log(res)

      location.href=res.session.url
    })
  }

}
