import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private browser:InAppBrowser, private fcm: Firebase) {
    //this.getToken();
    //this.openURL();

    //this.getToken2();
    
  }
  openURL(){
    const opt: InAppBrowserOptions={
      zoom: "no",
      location: "no",
      hidenavigationbuttons:"yes"      
    };
      this.browser.create('https://www.e3ecommerce.com.ar/es/','_self',opt);
  }
/*
  async getToken() {
    this.fcm.onTokenRefresh()
    .subscribe(token => {
      console.log("FB Token " + token);
      });  
      
  }
  getToken2(){
    this.fcm.getToken()
    .then(token => console.log("The token is: "+token)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error("Error getting token", error));
  }
  onNotificationOpen(){
    this.fcm.onNotificationOpen()
    .subscribe(data => console.log("User opened a notification: "+ data));
  }
  onTokenRefresh(){
    this.fcm.onTokenRefresh()
    .subscribe((token: string) => console.log("Got a new token "+token));
  }


*/


}
