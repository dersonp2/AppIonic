import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-toasty',
  templateUrl: './toasty.page.html',
  styleUrls: ['./toasty.page.scss'],
})
export class ToastyPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Serviço iniciado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Titulo',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorito',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
