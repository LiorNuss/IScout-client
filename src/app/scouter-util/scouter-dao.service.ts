import { Injectable } from '@angular/core';
import {ServerConnectorService} from "../shared/services/server-connector.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ScouterDaoService {

  constructor(private serverConnector: ServerConnectorService) { }

  public getScouterLogin(username: string, password: string): Observable<any> {
    // TODO change to config file of all routes
    const playerLoginUrl = 'scouter/login';
    const params = { params: new HttpParams().set('username', username).set('password', password) };
    return this.serverConnector.getData(playerLoginUrl, params);
  }

}
