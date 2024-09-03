import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { IallProducts } from '../../core/interfaces/iall-products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  // services
  private readonly _productService = inject(ProductService);

  // array pull all products
  allProducts:IallProducts[] = [];

  // subscribe
  getAllProductSub!:Subscription;

  // oninit function
  ngOnInit(): void {
      this.getAllProductSub =  this._productService.getAllProducts().subscribe({
        next:(res)=>{
          console.log(res.data);
          this.allProducts = res.data;
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }

  // ondestroy function
  ngOnDestroy(): void {
      this.getAllProductSub?.unsubscribe();
  }
}
