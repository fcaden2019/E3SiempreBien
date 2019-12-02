import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserGlobalProvider } from '../providers/user-global/user-global';
import * as firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

firebase.initializeApp({
  apiKey: "AIzaSyBX6cn6iMju8zq81j4Ijap6JHrv1J0bPNY",
  authDomain: "e3-siempre-bien.firebaseapp.com",
  databaseURL: "https://e3-siempre-bien.firebaseio.com",
  projectId: "e3-siempre-bien",
  storageBucket: "e3-siempre-bien.appspot.com",
  messagingSenderId: "405231585938",
  appId: "1:405231585938:web:4ee57b4be357bb1bbd744b",
  measurementId: "G-T7ZFEF146Y"
});

//import {AutenticacionService} from '../../providers/autenticacion.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    AuthServiceProvider,
    UserGlobalProvider,
    Firebase,
    HttpClient,
    Push,
    UniqueDeviceID
  ]
})
export class AppModule {}
