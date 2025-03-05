import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AsyncPipe, CurrencyPipe, DatePipe, NgFor, NgIf} from "@angular/common";
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
  IonText, IonBadge,
} from "@ionic/angular/standalone";
import {Card} from "../../models/card";
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Transaction} from "../../models/transaction";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    CurrencyPipe,
    DatePipe,
    IonBadge,
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
export class ShopListComponent implements OnInit, OnChanges {

  @Input({required: true}) public card!: Card;

  public transactionList$!: Observable<Array<{ date: Date; items: Array<Transaction> }>>;

  public constructor(private apiService: ApiService) {

  }

  public ngOnInit(): void {

    this.getTransactions(this.card);

  }

  public getTransactions(card: Card) {

    this.transactionList$ = this.apiService
      .get<Array<{ date: Date; items: Array<Transaction> }>>(String(card.id).concat('/transactions'));

  }

  public ngOnChanges(changes: SimpleChanges): void {

    if (changes['card']) {

      this.getTransactions(this.card);

    }

  }

}
