import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-menuelega',
  templateUrl: './menuelega.page.html',
  styleUrls: ['./menuelega.page.scss'],
})
export class MenuelegaPage implements OnInit {
  opciones : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };

  urlLocal = 'http://tecnico/mielega/'; //default.asp
  urlRemota = 'http://app.elegaenergia.es/mielega/';
  targetBlank = '_blank';
  targetSelf = '_self';
  targetSystem = '_system';
  username!: string;
  password!: string;
  datosUsuario: any;
  usuarios: any;

  user = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private iapBrowser: InAppBrowser) { }

  ngOnInit() {
    console.log("Vista de elegaenergia ejecutada");
    this.verPaginaElega(this.urlLocal);// para visualizar automáticamente la página de elega
  }

  verPaginaElega(urlLocal: string) {
    console.log("Traza de la aplicación de Elega "+urlLocal);

    this.datosUsuario = this.user.value;
    console.log("Datos de usuario: "+this.user.value);
    console.log("Datos de usuario(2): "+this.datosUsuario);
    this.username = this.datosUsuario.username;
    this.password = this.datosUsuario.password;

    //console.log("Lista de usuarios: "+this.usuarios);
    //window.open(urlLocal, this.targetSelf, 'location=yes');
    this.iapBrowser.create(urlLocal, this.targetBlank);
  }

  /*verPaginaElega() {
    //this.iapBrowser.create(this.urlGoogle, this.target, this.opciones);// en el entorno web local
    //this.iapBrowser.create("this.urlRemota",this.target, this.opciones);// en el entorno web remoto

    //this.iapBrowser.create(this.urlLocal, this.targetBlank);

    //window.open(this.urlGoogle, this.targetSelf);

    // Podemos incluir las opciones posteriormente para una mejor visualización
    //this.iapBrowser.create(this.urlGoogle, this.targetBlank);

    //window.open(this.urlLocal, this.target);// en el entorno web local
    //window.open(this.urlRemota, this.target);// en el entorno web remoto
  }*/

}
