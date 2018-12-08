import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobaPage } from '../soba/soba';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goSoba(i){
    this.navCtrl.push(SobaPage, {i});
  }
}
