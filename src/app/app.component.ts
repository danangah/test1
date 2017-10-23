import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//NEW
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/loginpage/loginpage';
//NEW

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, private afAuth: AngularFireAuth, private statusBar: StatusBar, private splashscreen: SplashScreen) {
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = TabsPage;
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }
}
  /*
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  */