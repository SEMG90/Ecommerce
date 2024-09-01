import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar-blnk',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar-blnk.component.html',
  styleUrl: './navbar-blnk.component.scss'
})
export class NavbarBlnkComponent {
  readonly _authService = inject(AuthService);

  // auth service function
  signOut():void{
    this._authService.logOut()
  }
}
