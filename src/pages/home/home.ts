import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PotrosnjaPage } from '../potrosnja/potrosnja';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  
  goPotrosnja(){
    this.navCtrl.push(PotrosnjaPage);
  }
}
