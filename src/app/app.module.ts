import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LabworkPage } from '../pages/labwork/labwork';
import { CekjadwalPage } from '../pages/cekjadwal/cekjadwal';
import { CekmodulPage } from '../pages/cekmodul/cekmodul';
import { UnggahlaporanPage } from '../pages/unggahlaporan/unggahlaporan';
import { CektpPage } from '../pages/cektp/cektp';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/loginpage/loginpage';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAWcs4zE0GqC_WJD4kxwxZbay7kSnrYFow",
  authDomain: "labwork-si.firebaseapp.com",
  databaseURL: "https://labwork-si.firebaseio.com",
  projectId: "labwork-si",
  storageBucket: "labwork-si.appspot.com",
  messagingSenderId: "614001865833"
};


@NgModule({
  declarations: [
    MyApp,
    LabworkPage,
    CekjadwalPage,
    CekmodulPage,
    CektpPage,
    UnggahlaporanPage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LabworkPage,
    CekjadwalPage,
    CekmodulPage,
    CektpPage,
    UnggahlaporanPage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}