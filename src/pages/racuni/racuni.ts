import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Racun } from '../../models/racuni';

/**
 * Generated class for the RacuniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-racuni',
  templateUrl: 'racuni.html',
})
export class RacuniPage {

  mjeseciList : Observable<Racun[]>;
  mjeseciListRef: AngularFirestoreCollection<Racun>;

  constructor(public navCtrl: NavController, private db: AngularFirestore) {
    this.mjeseciListRef = this.db.collection<Racun>('potrosnja', ref => ref.orderBy('red'));
    this.mjeseciList = this.mjeseciListRef.valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RacuniPage');
  }

}
