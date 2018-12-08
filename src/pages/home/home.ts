import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PotrosnjaPage } from '../potrosnja/potrosnja';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  deviceList: Observable<ulaz[]>;
  deviceListRef: AngularFirestoreCollection<Device>;
  constructor(public navCtrl: NavController) {

  }
  
  goPotrosnja(){
    this.navCtrl.push(PotrosnjaPage);
  }
}
