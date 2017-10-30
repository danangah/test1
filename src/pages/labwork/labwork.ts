import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database"; 
//import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Component({
  selector: 'labwork',
  templateUrl: 'labwork.html'
})

export class LabworkPage {
  
  public datas	: FirebaseListObservable<any[]>;

  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth,
    private platform: Platform,
    private angFire: AngularFireDatabase) { }
  signOut() {
    this.auth.auth.signOut();
  }

  ionViewDidLoad()
   {
      this.platform.ready()
      .then(() =>
      {
         this.datas = this.angFire.list('/datas', {
            query: {
            //orderByChild: 'nama',
            //equalTo: true,
            }
         });
      });
   }
}