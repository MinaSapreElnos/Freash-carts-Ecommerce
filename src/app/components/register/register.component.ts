import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthServiceService:AuthServiceService,private _Router:Router){}

  custamValidation(group:AbstractControl):any{
    const password=group.get('password')?.value
    const rePassword=group.get('rePassword')?.value
    if(password!==rePassword){
      group.get('rePassword')?.setErrors({notMatch:true})
    }
  }

  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-z]{0,9}$/)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^[0125][0-9]{10}$/)])
  } ,{validators:this.custamValidation} )

  register(){
    console.log(this.registerForm.value)
    this._AuthServiceService.register(this.registerForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.message=='success'){
          localStorage.setItem('token',res.token)
          this._AuthServiceService.userToken=res.token
            this._Router.navigate(['/home'])
        }
      }
    })

}




}
