import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre:string = "";
  edad:number = 0;
  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              public navParams: NavParams) {

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");
  }
  cerrar_con_parametros(){
      let data = {
        nombre: "BRuno aguilar",
        edad: 18,
        coords: {
          lat: 10,
          lng: -10
        }
      };

      this.viewCtrl.dismiss(data);
  }
  cerrar_sin_parametros(){
    this.viewCtrl.dismiss();
  }
}
