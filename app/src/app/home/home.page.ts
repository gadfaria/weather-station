import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController,
              public menuController: MenuController) { }

  async viewAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sua Localização',
      message: '<strong>Lat:</strong> 000000' + '<br/>' + '<strong>Lon:</strong> 000000',
      buttons: ['OK']
    });

    await alert.present();
  }

  toogleMenu() {
    this.menuController.toggle();
  }
}
