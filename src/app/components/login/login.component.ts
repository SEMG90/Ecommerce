import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // services
  private readonly _authService = inject(AuthService); // auth service
  private readonly _formBuilder = inject(FormBuilder);  // formbuilder service
  private readonly _router = inject(Router) // router navigate from login component to login component
 
  // variables
  msgError:string = '';  // error message
  msgSuccess:boolean = false; // success message
  isLoading:boolean = false;  // loading spinner

  // easier way to create group controls
  login:FormGroup = this._formBuilder.group({ 
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{6,}$/)]]
   })

  // login submit function
  regSubmit():void{
    if(this.login.valid){
      this.isLoading = true;
      this._authService.setlogin(this.login.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message == 'success'){
            this.msgSuccess = true;
            setTimeout(() => {

              // save token
              localStorage.setItem('userToken', res.token);

              //decode token
              this._authService.saveUserData;

              // goto home component
              this._router.navigate(['/home'])
            }, 2500);
          }
          this.isLoading = false;
        },
        error:(err:HttpErrorResponse)=>{
          this.msgError = err.error.message;
          console.log(err)
          this.isLoading = false;
        }
      })
    }
  }

}
