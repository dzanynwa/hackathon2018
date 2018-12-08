import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { Device } from '../../models/device';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the PotrosnjaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-potrosnja',
  templateUrl: 'potrosnja.html',
})
export class PotrosnjaPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  deviceList: Observable<Device[]>;
  deviceListRef: AngularFirestoreCollection<Device>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.deviceListRef = this.db.collection<Device>('uredjaji');
    this.deviceList = this.deviceListRef.valueChanges();
  }

  ionViewDidLoad() {
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
      type: 'bar',
      data: {
          labels: ["TV", "Klima", "Sound", "Frižider", "Svjetlo", "Bojler"],
          datasets: [{
              label: '# potrošnja',
              data: [12, 19, 9, 11, 3, 18],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });

  }

}
