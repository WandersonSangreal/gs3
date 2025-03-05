import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Storage} from '@ionic/storage-angular';
import {firstValueFrom} from "rxjs";
import {User} from "../models/user";
import {Token} from "../models/token";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageReady: Promise<Storage>;

  public constructor(private apiService: ApiService, private storage: Storage) {

    this.storageReady = this.storage.create();

  }

  public async login(credentials: Partial<User>): Promise<boolean> {

    try {

      const response: Token = await firstValueFrom<Token>(this.apiService.post<Token>('auth/login', credentials));

      if (response.token) {

        await this.storageReady;
        await this.storage.set('token', response.token);

        return true;

      }

      return false;

    } catch (e) {

      return false;

    }

  }

  public async getToken(): Promise<string | null> {

    await this.storageReady;

    return this.storage.get('token');

  }

  public async logout() {

    await this.storageReady;

    await this.storage.remove('token');

  }

}
