import {Component, OnInit} from '@angular/core';
import {
  IonContent,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  imports: [
    IonContent,
    IonText,
  ]
})
export class EmptyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
