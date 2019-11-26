import { Injectable } from '@angular/core';

/*
  Generated class for the UserGlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserGlobalProvider {

  private user: UserGlobalProvider; 
    username: string;
    password: string;
    grant_type: string;
    access_token: string;

    getUser(): UserGlobalProvider {
      return this.user;
    }
  
    setUser(user:UserGlobalProvider) {
      this.user = user;
    }

}
