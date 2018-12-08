import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Device } from '../../models/device';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  deviceList: Observable<Device[]>;
  deviceListRef: AngularFirestoreCollection<Device>;
  device: Device[];
  countDevices: any;
  aaa: any;
  index: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.device = navParams.get("device");
    this.index = navParams.get("i");
    if(this.index == 1){
    this.deviceListRef = this.db.collection<Device>('dnevni');
    this.deviceList = this.deviceListRef.snapshotChanges()
      .map(actions => {
          this.countDevices = actions.length;
          return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
        });
    }
    if(this.index == 2){
      this.deviceListRef = this.db.collection<Device>('spavaca');
      this.deviceList = this.deviceListRef.snapshotChanges()
        .map(actions => {
            this.countDevices = actions.length;
            return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
          });
      }
      if(this.index == 3){
        this.deviceListRef = this.db.collection<Device>('kuhinja');
        this.deviceList = this.deviceListRef.snapshotChanges()
          .map(actions => {
              this.countDevices = actions.length;
              return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
            });
      }
      if(this.index == 4){
        this.deviceListRef = this.db.collection<Device>('kupatilo');
        this.deviceList = this.deviceListRef.snapshotChanges()
          .map(actions => {
              this.countDevices = actions.length;
              return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
            });
      }
      if(this.index == 5){
        this.deviceListRef = this.db.collection<Device>('garaza');
        this.deviceList = this.deviceListRef.snapshotChanges()
          .map(actions => {
              this.countDevices = actions.length;
              return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
            });
      }
      if(this.index == 6){
        this.deviceListRef = this.db.collection<Device>('djecija');
        this.deviceList = this.deviceListRef.snapshotChanges()
          .map(actions => {
              this.countDevices = actions.length;
              return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
            });
      }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  slajder(divajsvoljum, key){
    console.log(divajsvoljum)
    console.log(key)
    console.log(this.index)
    if(this.index == 1){
    this.aaa = 'dnevni/'+key
    console.log(this.aaa)
    this.db.doc(this.aaa).update({
      volume: divajsvoljum
    }).then(() => {
      console.log('updated')
    })
  }
  if(this.index == 2){
    this.aaa = 'spavaca/'+key
    this.db.doc(this.aaa).update({
      volume: divajsvoljum
    }).then(() => {
      console.log('updated')
    })
  }
  if(this.index == 3){
    this.aaa = 'kuhinja/'+key
    this.db.doc(this.aaa).update({
      volume: divajsvoljum
    }).then(() => {
      console.log('updated')
    })
  }
  if(this.index == 4){
    this.aaa = 'kupatilo/'+key
    this.db.doc(this.aaa).update({
      volume: divajsvoljum
    }).then(() => {
      console.log('updated')
    })
  }
  if(this.index == 5){
    this.aaa = 'garaza/'+key
    this.db.doc(this.aaa).update({
      volume: divajsvoljum
    }).then(() => {
      console.log('updated')
    })
  }
  if(this.index == 6){
    this.aaa = 'djecija/'+key
    this.db.doc(this.aaa).update({
      volume: divajsvoljum
    }).then(() => {
      console.log('updated')
    })
  }
  }
  paligasi(napon, key){
    console.log(this.index)
    if(this.index == 1){
      this.aaa = 'dnevni/'+key
      this.db.doc(this.aaa).update({
        power: napon
      }).then(() => {
        console.log('updated')
      })
    }
    if(this.index == 2){
      this.aaa = 'spavaca/'+key
      this.db.doc(this.aaa).update({
        power: napon
      }).then(() => {
        console.log('updated')
      })
    }
    if(this.index == 3){
      this.aaa = 'kuhinja/'+key
      this.db.doc(this.aaa).update({
        power: napon
      }).then(() => {
        console.log('updated')
      })
    }
    if(this.index == 4){
      this.aaa = 'kupatilo/'+key
      this.db.doc(this.aaa).update({
        power: napon
      }).then(() => {
        console.log('updated')
      })
    }
    if(this.index == 5){
      this.aaa = 'garaza/'+key
      this.db.doc(this.aaa).update({
        power: napon
      }).then(() => {
        console.log('updated')
      })
    }
    if(this.index == 6){
      this.aaa = 'djecija/'+key
      this.db.doc(this.aaa).update({
        power: napon
      }).then(() => {
        console.log('updated')
      })
    }
  }
  
}
