import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  usrPage: UserPage;
  constructor(private navCtrl: NavController){

  }

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter(): boolean | Promise<boolean>{
    console.log('ionViewCanEnter');
    const rdn = Math.random();

    //If return False, the user cannot open the page
    return rdn > 0.1;
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }
  
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }
  
  ionViewCanLeave(): boolean | Promise<boolean>{
    console.log('ionViewCanLeave');
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout( () => {
        //If return False, the user cannot open the page
        resolve(true);
      }, 1000);
    });
        
    return promise;
  }
  
  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  
  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }


}
