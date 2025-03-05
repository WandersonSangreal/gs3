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
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Favorite} from "../../models/favorite";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
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

  public favoriteList$!: Observable<Array<Favorite>>;

  public constructor(private apiService: ApiService) {

    this.favoriteList$ = this.apiService.get('favorite');

  }

}
