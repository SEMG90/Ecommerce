import { enviroment } from './../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // http client
  private readonly httpClient = inject(HttpClient);

  // get all categories
  getAllCategories():Observable<any>{
    return this.httpClient.get(`${enviroment.baseURL}/api/v1/categories`);
  }

  // get specific categories
  getSpecCategories(id:string):Observable<any>{
    return this.httpClient.get(`${enviroment.baseURL}/api/v1/categories/${id}`);
  }
}
