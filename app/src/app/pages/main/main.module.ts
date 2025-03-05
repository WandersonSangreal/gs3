import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MainPage} from './main.page';
import {MainPageRoutingModule} from './main-routing.module';
import {HeaderComponent} from "../../components/slices/header.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MainPageRoutingModule,
  ],
  declarations: [MainPage, HeaderComponent],
})
export class MainPageModule {
}
