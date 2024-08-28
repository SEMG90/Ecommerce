import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // create group controls
  register:FormGroup = new FormGroup ( {
    name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{6,}$/)]),
    repassword: new FormControl(null),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.passConfirm )

  // register submit function
  regSubmit():void{
    console.log( this.register )
  }

  // password confirmation
  passConfirm(group:AbstractControl){
    if( group.get('password')?.value === group.get('repassword')?.value ){return null}
    else{return {mismatch:true} }
  }

}
