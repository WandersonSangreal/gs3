import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {

  public user$: Observable<User>;

  public constructor(private router: Router, private apiService: ApiService, private authService: AuthService) {

    this.user$ = this.apiService.get('auth/user');

  }

  public logout() {

    this.authService.logout().then(response => {

      this.router.navigate(['/home']);

    });

  }

}
