import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";

import {LoginComponent} from "../../components/modals/login.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public constructor(private modalController: ModalController) {
  }

  public async openLoginModal() {

    const modal = await this.modalController.create({
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      component: LoginComponent,
    });

    await modal.present();

  }

}
