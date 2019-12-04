import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AuthPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pushSetup();
    });
  }

  pushSetup(){
    const options: PushOptions = {
       android: {
           // Añadimos el sender ID para Android.
           senderID: '582353805052'
       },
       ios: {
           alert: 'true',
           badge: true,
           sound: 'false'
       },
       browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    
 
    const pushObject: PushObject = this.push.init(options);

    let topic = "siemprebien"; //this way ,topics are working in android but not in ios
    pushObject.subscribe(topic);
 
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    
/*
    pushObject.on('registration').subscribe((data:any) => {             
        let topic = "topics/siemprebien";
        pushObject.subscribe(topic).then((res:any) => {
            //console.log("subscribed to topic: ", res);
        });        
    });
    */


    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}

