import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    phone: new FormControl(null)
  } )

  // register submit function
  regSubmit():void{
    console.log( this.register )
  }
}
