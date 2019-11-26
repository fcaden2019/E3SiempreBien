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
    this.openURL();
    this.getToken();
  }
  openURL(){
    const opt: InAppBrowserOptions={
      zoom: "no",
      location: "no",
      hidenavigationbuttons:"yes"      
    };
      this.browser.create('https://www.e3ecommerce.com.ar/es/','_self',opt);
  }

  async getToken() {
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log("FB Token " + token);
      });  
  }


}
