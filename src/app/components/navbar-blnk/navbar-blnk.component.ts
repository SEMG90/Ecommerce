import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-blnk',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar-blnk.component.html',
  styleUrl: './navbar-blnk.component.scss'
})
export class NavbarBlnkComponent {
  title = 'Ecommerce';
}
