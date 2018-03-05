import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export class ServerConnectorService {

  constructor(private http: HttpClient) { }

  public getData(url: string, params?: any): Observable<any>{
    return this.http.get(url, params);
  }

}
