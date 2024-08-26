import { Component } from '@angular/core';
import { NavbarAuthComponent } from "../../components/navbar-auth/navbar-auth.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-layout-auth',
  standalone: true,
  imports: [NavbarAuthComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout-auth.component.html',
  styleUrl: './layout-auth.component.scss'
})
export class LayoutAuthComponent {

}
