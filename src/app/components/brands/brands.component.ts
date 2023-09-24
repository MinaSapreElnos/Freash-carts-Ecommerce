import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  allBrands:any[]=[]
  constructor(private _ProductsService :ProductsService ){

    this._ProductsService.getAllBrands().subscribe((brand)=>{
       this.allBrands=brand.data 
       console.log(this.allBrands)
    })

  }

}


