import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = environment.api;

  public constructor(private http: HttpClient) {
  }

  public get<T>(endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.url}/${endpoint}`, {params});
  }

  public post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.url}/${endpoint}`, body);
  }

}
