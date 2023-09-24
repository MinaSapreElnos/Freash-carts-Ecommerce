import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  numOfCartItems:BehaviorSubject<number>=new BehaviorSubject(0)

  constructor(private _httpClint:HttpClient) { 

   this.addCartInPage().subscribe((res)=>{
    console.log(res)
    this.numOfCartItems.next(res.numOfCartItems)
   })
  }


 
  // All Products//
  getAllProducts():Observable<any>{
    return this._httpClint.get('https://ecommerce.routemisr.com/api/v1/products')
  }



  //Get Specific Product//
  GetSpecificProduct(productId:string):Observable<any>{
    return this._httpClint.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)

  }
  

  // Get All Categories//

  getAllCategories():Observable<any>{
    return this._httpClint.get('https://ecommerce.routemisr.com/api/v1/categories')
  }


  //Get Brands//


  getAllBrands():Observable<any>{
    return this._httpClint.get('https://ecommerce.routemisr.com/api/v1/brands')
  }


  // add product To Cart // 

  addProductToCart(productId:string):Observable<any>{
    return this._httpClint.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
      "productId":productId
    },
    )
  }



  // display carts in cart page//

  addCartInPage():Observable<any>{
    return this._httpClint.get('https://ecommerce.routemisr.com/api/v1/cart',
   )
  }


  //Update Product Count//

  updateProductCount(productId:string,count:number):Observable<any>{
    return this._httpClint.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      "count":count
    },)

  }


  RemoveCartItam(productId:string):Observable<any>{
    return this._httpClint.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
   )
   }


   clearItam():Observable<any>{
      return this._httpClint.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
     )
   }




chackOut(shippingAddress:any,cartId:string):Observable<any>{
  return this._httpClint.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`
  ,{
    "shippingAddress":shippingAddress
    },
  )

  }

  }
