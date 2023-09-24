import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  Categories:any[]=[]
constructor(private _productService:ProductsService){

  this._productService.getAllCategories().subscribe((res)=>{
      this.Categories=res.data
      console.log(this.Categories)
  })
}


}
