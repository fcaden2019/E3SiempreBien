import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGlobalProvider } from "../../providers/user-global/user-global";

@Injectable()
export class AuthServiceProvider {

  apiUrl = 'http://devsiempre.e3ecommerce.com/Api/';

  constructor(public http: HttpClient) {
    
  }

  login(user:UserGlobalProvider){
    return this.http.post(this.apiUrl+'token/', user);
  }

}
