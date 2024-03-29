import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3: any = Pagina3Page;
  mutantes: any[] = [{
    nombre: "Magneto",
    poder: "Controlar metal"
  },
  {
    nombre: "Wolverine",
    poder: "Regeneracion acelerada"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante:any){
      console.log(mutante);
      this.navCtrl.push(Pagina3Page, { 'mutante': mutante });
  }
}
