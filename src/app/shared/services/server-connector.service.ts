import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export class ServerConnectorService {
  readonly serverUrl = 'http://192.168.43.224:3000/api/';
  constructor(private http: HttpClient) { }

  public getData(apiUrl: string, params?: any): Observable<any>{
    return this.http.get(this.serverUrl + apiUrl, params);
  }

}
