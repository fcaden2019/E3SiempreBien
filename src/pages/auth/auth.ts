import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, MenuController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserGlobalProvider } from "../../providers/user-global/user-global";
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  auth: string = "login";

  constructor(private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, 
    public authService:AuthServiceProvider, private user:UserGlobalProvider,
    public alertCtrl: AlertController) {
		this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.terminarsesion();
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

      this.authService.login2(this.user)
      .subscribe(
        (data)=> {
          console.log('Respuesta ' + data);
          this.nav.push(HomePage,{tokenU:token});
        },
        (error)=>{
          let toast = this.toastCtrl.create({
            message: error.error,
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
          
          console.log(error);
        }    
      )
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
