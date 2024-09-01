import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { IallProducts } from '../../core/interfaces/iall-products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  // services
  private readonly _productService = inject(ProductService);

  // array pull all products
  allProducts:IallProducts[] = [];

  // oninit function
  ngOnInit(): void {
      this._productService.getAllProducts().subscribe({
        next:(res)=>{
          console.log(res.data);
          this.allProducts = res.data;
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }
}
