import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent {
  
  constructor(private _Router:Router){}

  goToHome(){
    this._Router.navigate(['/home'])
  }


}
