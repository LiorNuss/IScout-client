import { Injectable } from '@angular/core';
import {ServerConnectorService} from '../../shared/services/server-connector.service';
import {HttpParams} from '@angular/common/http';
import {Player} from '../entities/player';
import {Observable} from 'rxjs/Observable';
import {PlayerRegistrationInfo} from "../../player-registration/classes/player-registration-info";

@Injectable()
export class PlayerDaoService {

  constructor(private serverConnector: ServerConnectorService) { }

  public getPlayerLogin(username: string, password: string): Observable<any> {
    const playerLoginUrl = 'player/login';
    const params = { params: new HttpParams().set('username', username).set('password', password) };
    return this.serverConnector.getData(playerLoginUrl, params);
  }

  public getPlayerInfo(userId: number, playerId: number): Observable<any> {
    const playerInfoUrl = 'player/info';
    const params = { params: new HttpParams().set('user_id', userId.toString()).set('playerid', playerId.toString()) };
    return this.serverConnector.getData(playerInfoUrl, params);
  }

  public getPlayerStats(playerId: number): Observable<any> {
    const playerStatsUrl = 'player/statistics';
    const params = { params: new HttpParams().set('playerid', playerId.toString()) };
    return this.serverConnector.getData(playerStatsUrl, params);
  }

  public searchPlayers(filtersForSearch: any[], userId: number, page: number): Observable<Player[]> {
    const searchPlayerUrl = 'player/search';
    let searchPlayersParams = new HttpParams();
    searchPlayersParams = searchPlayersParams.set('user_id', userId.toString());
    searchPlayersParams = searchPlayersParams.set('page', page.toString());
    filtersForSearch.forEach(filterForSearch => {
      searchPlayersParams = searchPlayersParams.set(filterForSearch.categoryForSearch, filterForSearch.value);
    });

    const params = {params: searchPlayersParams};
    return this.serverConnector.getData(searchPlayerUrl, params);
  }

  public registerPlayer(playerRegistrationInfo: PlayerRegistrationInfo): Observable<any>{
    const playerRegisterUrl = 'player/register';
    const playerRegistrationToPost = {
      "name": playerRegistrationInfo.name,
      "age": playerRegistrationInfo.age,
      "leg": playerRegistrationInfo.leg,
      "position": playerRegistrationInfo.position,
      "team": playerRegistrationInfo.team_id,
      "country": playerRegistrationInfo.country,
      "username": playerRegistrationInfo.username,
      "password": playerRegistrationInfo.password
    }
    return this.serverConnector.postData(playerRegisterUrl, playerRegistrationToPost);

  }
}
