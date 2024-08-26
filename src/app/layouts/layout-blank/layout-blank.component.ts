import { Component } from '@angular/core';
import { NavbarBlnkComponent } from "../../components/navbar-blnk/navbar-blnk.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout-blank',
  standalone: true,
  imports: [NavbarBlnkComponent,RouterOutlet,FooterComponent],
  templateUrl: './layout-blank.component.html',
  styleUrl: './layout-blank.component.scss'
})
export class LayoutBlankComponent {

}
