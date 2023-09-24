import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Products:any[]=[]
  searchTer:string=''

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

}
