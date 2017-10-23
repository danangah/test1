import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'labwork',
  templateUrl: 'labwork.html'
})

export class LabworkPage {
  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth) { }
  signOut() {
    this.auth.auth.signOut();
  }
}