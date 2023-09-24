import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {

  searchTer:string=''
  Products:any[]=[]
  allCategory:any[]=[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
    constructor(private _ProductsService:ProductsService){
      this._ProductsService.getAllProducts().subscribe((allProducts)=>{
          this.Products=allProducts.data
          console.log(this.Products)
      })
    }

   
    

    addProductToCart(productId:string){
      this._ProductsService.addProductToCart(productId).subscribe((res)=>{
        console.log(res)

        this._ProductsService.numOfCartItems.next(res.numOfCartItems)
      })
    }

    getCategory(){
      this._ProductsService.getAllCategories().subscribe((res)=>{
        console.log(res.data)
        this.allCategory=res.data
      })
    }
    
}
