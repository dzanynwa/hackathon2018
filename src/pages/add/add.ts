import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SobaPage } from '../soba/soba';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Device } from '../../models/device';
import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  index: any;
  uredjaj: any;
  potrosnja: any; 
  deviceList: Observable<Device[]>;
  deviceListRef: AngularFirestoreCollection<Device>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.index = navParams.get("i");
    if(this.index == 1){
      this.deviceListRef = this.db.collection<Device>('dnevni');
      this.deviceList = this.deviceListRef.valueChanges();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
    console.log(this.index);
  }

  dodaj(){
    if(this.index == 1){
      this.db.collection("dnevni").add({uredjaj: this.uredjaj, potrosnja: this.potrosnja, power: false});
      this.navCtrl.setRoot(TabsPage);
    }
    if(this.index == 2){
      this.db.collection("spavaca").add({uredjaj: this.uredjaj, potrosnja: this.potrosnja, power: false});
      this.navCtrl.setRoot(TabsPage);
    }
    if(this.index == 3){
      this.db.collection("kuhinja").add({uredjaj: this.uredjaj, potrosnja: this.potrosnja, power: false});
      this.navCtrl.setRoot(TabsPage);
    }
    if(this.index == 4){
      this.db.collection("kupatilo").add({uredjaj: this.uredjaj, potrosnja: this.potrosnja, power: false});
      this.navCtrl.setRoot(TabsPage);
    }
    if(this.index == 5){
      this.db.collection("garaza").add({uredjaj: this.uredjaj, potrosnja: this.potrosnja, power: false});
      this.navCtrl.setRoot(TabsPage);
    }
    if(this.index == 6){
      this.db.collection("djecija").add({uredjaj: this.uredjaj, potrosnja: this.potrosnja, power: false});
      this.navCtrl.setRoot(TabsPage);
    }
  }
}
