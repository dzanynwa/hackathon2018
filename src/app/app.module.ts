import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { PotrosnjaPage } from '../pages/potrosnja/potrosnja';
import { RacuniPage } from '../pages/racuni/racuni';
import { TipsPage } from '../pages/tips/tips';
import { SobaPage } from '../pages/soba/soba';
import { AddPage } from '../pages/add/add';
import { InfoPage } from '../pages/info/info';

var config = {
  apiKey: "AIzaSyAJlH864lw_OdLbsBoUB0iPEdHnJcsmLFM",
  authDomain: "hackathonep.firebaseapp.com",
  databaseURL: "https://hackathonep.firebaseio.com",
  projectId: "hackathonep",
  storageBucket: "hackathonep.appspot.com",
  messagingSenderId: "626058805539"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    PotrosnjaPage,
    RacuniPage,
    TipsPage,
    SobaPage,
    AddPage,
    InfoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    PotrosnjaPage,
    TipsPage,
    RacuniPage,
    SobaPage,
    AddPage,
    InfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
