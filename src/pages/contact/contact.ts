import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RacuniPage } from '../racuni/racuni';
import { TipsPage } from '../tips/tips';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  }
  goRacuni(){
    this.navCtrl.push(RacuniPage);
  }
  goTips(){
    this.navCtrl.push(TipsPage);
  }
}
