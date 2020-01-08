import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, MenuController,Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserGlobalProvider } from "../../providers/user-global/user-global";
import { HomePage } from '../../pages/home/home';
//import { FCM } from '@ionic-native/fcm';
//import { Firebase } from '@ionic-native/firebase';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';


@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  auth: string = "login";
  dataApi:any;
  deviceID;
  platformOS;

  constructor(private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, 
    public authService:AuthServiceProvider, private user:UserGlobalProvider,
    public alertCtrl: AlertController,private uniqueDeviceID: UniqueDeviceID,public platform: Platform) 
  {
		this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.terminarsesion();
    //this.fcm.subscribeToTopic('marketing');
//this.getToken2();
//this.getTokenFCM();
    this.getToken3();


  }
  
  getTokenFCM(){
    /*
    this.fcm.getToken()
    .then(token => {
      this.presentAlert("OK2", "el token es: "+token)
    })
    .catch(error => {
      this.presentAlert("Error2", "No se pudo obtener el token: "+error)
    });
    */
  }
  
  getToken3(){
    this.uniqueDeviceID.get()  
    .then((uuid: any)  => {
      if (this.platform.is('ios')) {
        this.platformOS = "IOS";
       }
       if (this.platform.is('android')) {
        this.platformOS = "ANDROID";
       }
      
      //this.presentAlert("OK3", "La plataforma es: "+this.platformOS+" el token es: "+uuid)
      console.log("La plataforma es: "+this.platformOS+" el token es: "+uuid);
      this.deviceID=uuid
    })
    .catch(error => {
      this.presentAlert("Error3", "No se pudo obtener el token: "+error)
    });


  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      userReg: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  login() {
      let correo = this.onLoginForm.get('email').value;
      let clave = this.onLoginForm.get('password').value;
      let token = "";
      //this.nav.push(HomePage,{tokenU:token});
      this.user.username = correo;
      this.user.password = clave;
     // this.user.grant_type = "siemprebien";

     
     
     this.authService.PostLogin(this.user)        
     .subscribe(
         (data)=> {
          let data2 = JSON.stringify(data);
          this.dataApi = JSON.parse(data2);
          this.user.access_token = this.dataApi.access_token;
           console.log("El token es:"+this.dataApi.access_token);

           this.authService.PostDevice(this.user.access_token, this.platformOS,this.deviceID)        
           .subscribe(
               (data)=> {
                this.presentAlert("Bienvenido", "Se pudo ingresar correctamente");
                this.nav.push(HomePage);
               },
               (error)=>{
                this.presentAlert("Error", "No se pudo registrar el dispositivo");
                 console.log(error);
                 this.nav.push(HomePage);
                }
           );  



           //this.presentAlert("Correcto", "Se recibio el token perfectamente");
         },
         (error)=>{
          this.presentAlert("Error", "No se pudo obtener el token");
           console.log(error);
          }
     )   
     
    
     
     /*
     this.authService.login3()
     .then(data => console.log("The data is: "+data)) // save the token server-side and use it to push notifications to this device
     .catch(error => console.error("Error getting token", error));
*/


      
    }

    async presentAlert(Titulo, Mensaje) {
      const alert = await this.alertCtrl.create({
        title: Titulo,
        message: Mensaje,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    registrarUsuario(){   
     let correo= this.onRegisterForm.get('email').value;
     let clave= this.onRegisterForm.get('password').value; 
     let nombre= this.onRegisterForm.get('fullName').value; 
     let usuario= this.onRegisterForm.get('userReg').value;
     let token ="";
    }
  
    forgotPass() {
      let forgot = this.forgotCtrl.create({
        title: '¿Olvista la contraseña?',
        message: "Ingresá tu email y te enviamos la clave para tu ingreso.",
        inputs: [
          {
            name: 'email',
            placeholder: 'Email',
            type: 'email'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Enviar',
            handler: data => {
              console.log('Send clicked');
              let toast = this.toastCtrl.create({
                message: 'El email fue enviado correctamente.',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
              });
              toast.present();
            }
          }
        ]
      });
      forgot.present();
    }

    terminarsesion(){
    }
    
    CallAltaUsuario(nombre:string, mail:string, usuario:string, clave:string, token:string) {  
      console.log("Llamando a callAltaUsuario")  ;
    }

}
