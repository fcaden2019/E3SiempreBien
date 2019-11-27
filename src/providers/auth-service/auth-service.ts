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
  login2(Usuario) {
    let postData2 = {
        "username": "leonardo@e3ecommerce.com.ar",
        "password": "123456",
        "grant_type": "siemprebien"
    }

    return this.http.post('http://devsiempre.e3ecommerce.com/Api/token', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    
  }
}
