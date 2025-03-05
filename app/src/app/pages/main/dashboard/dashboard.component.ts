import {Component} from '@angular/core';
import {
  IonContent,
} from '@ionic/angular/standalone';

import {ShopListComponent} from "../../../components/slices/shop-list.component";
import {FavoritesComponent} from "../../../components/slices/favorites.component";
import {CardsComponent} from "../../../components/slices/cards.component";
import {Card} from "../../../models/card";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    IonContent,

    CardsComponent,
    FavoritesComponent,
    ShopListComponent,
  ]
})
export class DashboardComponent {

  public card!: Card;

  public constructor() {
  }

  public selectedCard(card: Card) {

    this.card = card;

  }

}
