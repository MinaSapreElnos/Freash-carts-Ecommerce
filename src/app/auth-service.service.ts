import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from './register-data';
import { Observable } from 'rxjs';
import { LoginData } from './login-data';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userToken:any

  constructor(private _httpClint:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('token')!=null){
      this. userToken=localStorage.getItem('token')
    }
  }

  // https://route-ecommerce-app.vercel.app/

  


  // API  registeration //
  register(registerData:RegisterData):Observable<any>{
    return this._httpClint.post('https://ecommerce.routemisr.com/api/v1/auth/signup', registerData);
  }



  // API  login //

  login(LoginData:LoginData):Observable<any>{
    return this._httpClint.post('https://ecommerce.routemisr.com/api/v1/auth/signin',LoginData)
   }


   logOut(){
    localStorage.removeItem('token')
    this.userToken=''
    this._Router.navigate(['/login'])
   }
   


}
