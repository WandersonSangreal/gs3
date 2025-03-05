import {Component} from '@angular/core';
import {NgFor} from "@angular/common";
import {
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonTitle,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';

import {ShopListComponent} from "../../../components/slices/shop-list.component";
import {FavoritesComponent} from "../../../components/slices/favorites.component";
import {CardsComponent} from "../../../components/slices/cards.component";

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

  constructor() {
  }

}
