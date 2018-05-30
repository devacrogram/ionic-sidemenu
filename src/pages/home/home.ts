import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Profile} from "../../model/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public profile = {} as Profile;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  modal() {
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(data => {
      if(Object.keys(data).length === 0) console.log('no data');
      else{
        this.profile.actionSwitch = data.actionSwitch;
        this.profile.name = data.name;
        this.profile.gender = data.gender;
        this.profile.domestic = data.domestic;
        this.profile.startDate = data.startDate;
      }
    })
    modal.present();
  }

}
