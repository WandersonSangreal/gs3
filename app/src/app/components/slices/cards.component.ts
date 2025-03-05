import {Component, Output, EventEmitter} from '@angular/core';
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
import {AsyncPipe, CurrencyPipe, NgFor, NgIf} from "@angular/common";
import {Observable, of} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Card} from "../../models/card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    CurrencyPipe,

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

  @Output() selectedCard = new EventEmitter<Card>();

  public selected!: Card;
  public cardList$!: Observable<Array<Card>>;

  public constructor(private apiService: ApiService) {

    this.apiService.get<Array<Card>>('card').subscribe(response => {

      this.selectCard(response[0]);
      this.cardList$ = of(response);

    });

  }

  public selectCard(card: Card) {

    this.selected = card;
    this.selectedCard.emit(this.selected);

  }

}
