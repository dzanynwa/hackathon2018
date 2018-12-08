import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Device } from '../../models/device';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AddPage } from '../add/add';
import { InfoPage } from '../info/info';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SobaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-soba',
  templateUrl: 'soba.html',
})
export class SobaPage {
  index : any;
  deviceList: Observable<Device[]>;
  deviceListRef: AngularFirestoreCollection<Device>;
  countDevices = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
      this.index = navParams.get('i');
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
    console.log('ionViewDidLoad SobaPage');
    console.log(this.index);
  }
  goAdd(){
    this.navCtrl.push(AddPage, {i: this.index});
  }
  showInfo(device: Device){
    this.navCtrl.push(InfoPage, {device, i: this.index});
  }
}