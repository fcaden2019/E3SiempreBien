import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGlobalProvider } from "../../providers/user-global/user-global";

@Injectable()
export class AuthServiceProvider {

  apiUrl = 'http://devsiempre.e3ecommerce.com/Api/';

  constructor(public http: HttpClient) {
    
  }

  PostLogin(user:UserGlobalProvider){
    //return this.http.post(this.apiUrl+'token/', user);
    return this.http.post('http://localhost:51199/api/token/', user);
  }

  PostDevice(Hash:string, Os:string, DeviceId:string){
    let postData = {
      "OS": Os,
      "DeviceId": DeviceId
  }
    
    return this.http.post("http://localhost:51199/api/device?hash="+Hash+"/", postData);
  }

  login2(Usuario) {
    let postData2 = {
        "username": "leonardo@e3ecommerce.com.ar",
        "password": "123456",
        "grant_type": "siemprebien"
    }
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Accept':  'application/json',
        'Content-Type': 'application/json'        
        })
      };

    /*
    this.httpHeader.append('Access-Control-Allow-Origin' , '*');
    this.httpHeader.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.httpHeader.append('Accept','application/json');
    this.httpHeader.append('content-type','application/json');
    */
    
   return this.http.post('http://devsiempre.e3ecommerce.com/Api/token', postData2,httpOptions);
    //return this.http.post('http://devsiempre.e3ecommerce.com/Api/token', postData2,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT').set('Accept','application/json').set('content-type','application/json')});    
    
    
  }
}
