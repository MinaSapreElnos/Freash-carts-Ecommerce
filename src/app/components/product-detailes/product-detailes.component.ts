import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent {

  productId:string =''
  
  ProductDetailes:any


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  constructor(private _ActivatedRoute:ActivatedRoute  , private _productservice:ProductsService){

    this._ActivatedRoute.paramMap.subscribe((prams)=>{
      this.productId=prams.get('id')||''
    })

    this._productservice.GetSpecificProduct(this.productId).subscribe((product)=>{
      console.log(product.data)
      this.ProductDetailes=product.data
    })
  }



  addToCart(id:string){
    this._productservice.addProductToCart(id).subscribe((res)=>{
      console.log(res)
      this._productservice.numOfCartItems.next(res.numOfCartItems)
    })
  }


}
