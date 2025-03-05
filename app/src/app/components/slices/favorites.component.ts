import {Component} from '@angular/core';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonText,
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonText,
  ]
})
export class FavoritesComponent {

  constructor() {
  }

}
