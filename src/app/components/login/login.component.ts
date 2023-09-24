import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthServiceService:AuthServiceService, private _Router:Router){}


  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),

  })

  login(){
    this.loginForm.value
    this._AuthServiceService.login(this.loginForm.value).subscribe({
      next:(res)=>{
        if(res.message=='success'){
          localStorage.setItem('token',res.token)
          this._AuthServiceService.userToken=res.token
          this._Router.navigate(['/home'])
        }
      }
    })
  }


 
  

}
