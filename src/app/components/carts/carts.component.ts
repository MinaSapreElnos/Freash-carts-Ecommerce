import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  clickSetTimeOut:any
 cartProducts:any[]=[]
 cartId:string=''
  constructor(private _ProductsService :ProductsService ){}


  ngOnInit(): void {
    
    this._ProductsService.addCartInPage().subscribe((res)=>{
        this.cartProducts=res.data.products 
        this.cartId=res.data._id
        console.log(this.cartProducts)
    })
  }


  //updeta product count//
  updateProductCount(productId:string,count:number){
     clearTimeout(this.clickSetTimeOut)

      this.clickSetTimeOut=setTimeout(()=>{
        if(count==0){
          this._ProductsService.RemoveCartItam(productId).subscribe((res)=>{
            this.cartProducts=res.data.products
          })
        }else{
          this._ProductsService.updateProductCount(productId,count).subscribe((res)=>{
            this.cartProducts=res.data.products
              console.log(res)
              console.log('Hi')
          })
        }
      },500)
   }


   //remove itam//
   


   
 removeItam(productId:string){
  this._ProductsService.RemoveCartItam(productId).subscribe((res)=>{
       this.cartProducts=res.data.products
       this._ProductsService.numOfCartItems.next(res.numOfCartItems)
  })

 }



 clearItam(){
    this._ProductsService.clearItam().subscribe((res)=>{
      this.cartProducts=res.data?.products
      this._ProductsService.numOfCartItems.next(res.numOfCartItems)
    })
 }




}

