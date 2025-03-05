import {Component} from '@angular/core';
import {
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol, IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonSegment,
  IonSegmentButton, IonText
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardHeader,
    IonContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
  ]
})
export class CardsComponent {

  constructor() {
  }

}
