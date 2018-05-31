import { Component } from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';

import {Profile} from "../../model/profile";
import {Account} from "../../model/Account";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public profile = {} as Profile;
  private accountData = {} as Account;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {

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

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과 E-mail 주소를 입력하세요.",
      inputs: [
        {
          name: 'name',
          placeholder: '이름 입력'
        },
        {
          name: 'email',
          placeholder: 'E-mail 주소 입력'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '저장',
          handler: data => {
            console.dir(data);
            this.accountData = {name: data.name, email: data.email};
            this.navCtrl.push('NavPage',{account:this.accountData});
          }
        }
      ]
    });
    prompt.present();
  }

}
