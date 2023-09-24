import { Pipe, PipeTransform } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';

@Pipe({
  name: 'searsh'
})
export class SearshPipe implements PipeTransform {

  transform(products:any[],searshTerm:string): any[] {
    return products.filter((product)=> product.title.toLowerCase().includes(searshTerm.toLocaleLowerCase()))
  }

}
