import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService<T> {
  constructor(private http: HttpClient) {}

  public postData(baseUrl: string, restUrl: string, body: any): Observable<T> {
    return this.http.post<T>(baseUrl.concat(restUrl), body, httpOptions);
  }

  public getData(baseUrl: string, restUrl: string): Observable<T> {
    return this.http.get<T>(baseUrl.concat(restUrl));
  }
}
