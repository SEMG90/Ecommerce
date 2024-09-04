import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { IallProducts } from '../../core/interfaces/iall-products';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { error } from 'console';
import { IallCategories } from '../../core/intefaces/iall-categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  // services
  private readonly _productService = inject(ProductService); // product service
  private readonly _categoryService = inject(CategoriesService); // categories service

  // array pull all products
  allProducts:IallProducts[] = [];

  // array pull all categories
  allCategories:IallCategories[] = [];

  // subscribe
  getAllProductSub!:Subscription;

  // oninit function
  ngOnInit(): void {

      // get all categories
      this._categoryService.getAllCategories().subscribe({
        next:(res)=>{
          console.log(res.data);
          this.allCategories = res.data;
        },
        error:(err)=>{
          console.log(err);
        }
      });
    
      // get all products
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
