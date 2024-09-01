import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // http client
  private readonly httpClient = inject(HttpClient);

  // get all products function
  getAllProducts():Observable<any>{
    return this.httpClient.get(`${enviroment.baseURL}/api/v1/products`);
  }

  // get specific products function
  getSpecProducts(id:string):Observable<any>{
    return this.httpClient.get(`${enviroment.baseURL}/api/v1/products/${id}`)
  }

}
