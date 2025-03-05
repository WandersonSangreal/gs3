import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe, NgFor, NgIf} from "@angular/common";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonItem,
  IonTitle,
  IonList,
  IonLabel,
  IonText,
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
  imports: [
    NgFor,
    NgIf,
    CurrencyPipe,
    DatePipe,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText,
    IonButton,
    IonItem,
    IonTitle,
    IonList,
    IonLabel,
  ]
})
export class ShopListComponent {

  public lists = [
    {
      date: '2024-09-05', items: [
        {label: 'Apple', date: '2024-09-05 22:35', amount: 545.99, by: 12, icon: 'phone-portrait-outline'},
        {label: 'Uber*Uber*Trip', date: '2024-09-05 15:25', amount: 12.96, by: 1, icon: 'car-outline'},
      ]
    },
    {
      date: '2024-09-03', items: [
        {label: 'Carrefour', date: '2024-09-03 09:34', amount: 349.76, by: 3, icon: 'cart-outline'},
      ]
    },
  ];

  constructor() {
  }

}
