import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroments';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // services
  private readonly _httpClient = inject(HttpClient);
  private readonly _logOut = inject(Router);

  // property
  saveData:any = null;

  // register
  setRegister(data:object):Observable<any>{
    return this._httpClient.post(`${enviroment.baseURL}/api/v1/auth/signup`, data)  
  }

  // login
  setlogin(data:object):Observable<any>{
    return this._httpClient.post(`${enviroment.baseURL}/api/v1/auth/signin`, data)  
  }

  // decode token function
  saveUserData():void{
    let decodeToken:any = localStorage.getItem('userToken');
    if(decodeToken !== null){
      jwtDecode(decodeToken)
    }
    console.log('save data', this.saveData)
  }

  // sign out function
  logOut():void{
    localStorage.removeItem('userToken');
    this.saveData = null;
    this._logOut.navigate(['/login']);
  }

}
