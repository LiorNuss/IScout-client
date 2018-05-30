import { Injectable } from '@angular/core';
import {ServerConnectorService} from '../../shared/services/server-connector.service';
import {HttpParams} from '@angular/common/http';
import {Player} from '../entities/player';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlayerDaoService {

  constructor(private serverConnector: ServerConnectorService) { }

  public getPlayerLogin(username: string, password: string): Observable<any> {
    // TODO change to config file of all routes
    const playerLoginUrl = 'player/login';
    const params = { params: new HttpParams().set('username', username).set('password', password) };
    return this.serverConnector.getData(playerLoginUrl, params);
  }

  // public searchPlayers(player: Player): Observable<Player[]> {
  //   const searchPlayerUrl = 'http://localhost:3000/api/player/search';
  //   let playerParams = new HttpParams();
  //   if (player.name) {
  //     playerParams = playerParams.set('name', player.name);
  //   }
  //   if (player.age) {
  //     playerParams = playerParams.set('age', player.age.toString());
  //   }
  //   if (player.position) {
  //     playerParams = playerParams.set('position', player.position);
  //   }
  //   if (player.leg) {
  //     playerParams = playerParams.set('leg', player.leg);
  //   }
  //   if (player.country) {
  //     playerParams = playerParams.set('country', player.country);
  //   }
  //   if (player.team) {
  //     playerParams = playerParams.set('team', player.team);
  //   }
  //   if (player.goals) {
  //     playerParams = playerParams.set('goals', player.goals.toString());
  //   }
  //   if (player.assists) {
  //     playerParams = playerParams.set('assists', player.assists.toString());
  //   }
  //   const params = {params: playerParams};
  //   console.log(params);
  //   return this.serverConnector.getData(searchPlayerUrl, params);
  // }

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
}
