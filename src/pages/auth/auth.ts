import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  user: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public facebook: Facebook
  ) {
  }

  loginFacebook() {
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.facebook.login(permissions)
      .then((response: FacebookLoginResponse) => {
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
          .then(profile => {
            this.user = {
              email: profile['email'],
              first_name: profile['first_name'],
              picture: profile['picture_large']['data']['url'],
              username: profile['name']
            };
          });
      });
  }
}