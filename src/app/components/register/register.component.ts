import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {

  // services
  private readonly _authService = inject(AuthService); // auth service
  private readonly _formBuilder = inject(FormBuilder);  // formbuilder service
  private readonly _router = inject(Router) // router navigate from register component to login component
 
  // property
  msgError:string = '';  // error message
  msgSuccess:boolean = false; // success message
  isLoading:boolean = false;  // loading spinner
  registerSub!: Subscription;

  // easier way to create group controls
  register:FormGroup = this._formBuilder.group({ 
    name : [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{6,}$/)]],
    rePassword: [null],
    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]] 
   } , { validators: this.passConfirm })

  // create group controls
  /*
  register:FormGroup = new FormGroup ( {
    name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{6,}$/)]),
    rePassword: new FormControl(null),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.passConfirm ) */

  // register submit function
  regSubmit():void{
    if(this.register.valid){
      this.isLoading = true;
      this.registerSub = this._authService.setRegister(this.register.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message == 'success'){
            this.msgSuccess = true;
            setTimeout(() => {
              this._router.navigate(['/login'])
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

  // password confirmation
  passConfirm(group:AbstractControl){
    if( group.get('password')?.value === group.get('rePassword')?.value ){return null}
    else{return {mismatch:true} }
  }

  // ondestroy Function
  ngOnDestroy(): void {
      this.registerSub?.unsubscribe();
  }

}
