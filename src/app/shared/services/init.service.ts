import { Injectable } from '@angular/core';
import {GlobalDataService} from "./global-data.service";
import {ServerConnectorService} from "./server-connector.service";
import {Team} from "../classes/team";

@Injectable()
export class InitService {

  constructor(private globalData: GlobalDataService,
              private serverConnector: ServerConnectorService) { }

  public init(): void {
    this.getTeams();
  }

  public getTeams(): void {
    const teamsUrl = 'global/teams';
    this.serverConnector.getData(teamsUrl).subscribe(teamsData =>
    teamsData.forEach(teamData => {
      let team = new Team();
      team.id = teamData.id;
      team.country = teamData.country;
      team.name = teamData.name;
      team.lat = teamData.lat;
      team.lon = teamData.lon;
      this.globalData.teams.push(team);
      this.globalData.teamMapper.set(team.name, team.id);
    }));
  }

  // public getPlayerLogin(username: string, password: string): Observable<any> {
  //   // TODO change to config file of all routes
  //   const playerLoginUrl = 'player/login';
  //   const params = { params: new HttpParams().set('username', username).set('password', password) };
  //   return this.serverConnector.getData(playerLoginUrl, params);
  // }
}
