import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAuth() { 
    this.navCtrl.setRoot(AuthPage);
  }

}
