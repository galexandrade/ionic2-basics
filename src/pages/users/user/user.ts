import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit {

  name: string;

  constructor(private navParams: NavParams,
              private navCtrl: NavController){}

  ngOnInit(): void {
    console.log(this.navParams.data);
    this.name = this.navParams.data.userName;
  }

  onGoBack(){
    this.navCtrl.pop();
  }
  
  onGoHome(){
    this.navCtrl.popToRoot();
  }

}
