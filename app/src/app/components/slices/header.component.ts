import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {User} from "../../models/user";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {

  public user$: Observable<User>;

  public constructor(private apiService: ApiService) {

    this.user$ = this.apiService.get('auth/user');

  }

}
