import { Injectable } from '@angular/core';
import {Team} from "../classes/team";

@Injectable()
export class GlobalDataService {
  private _teams: Team[] = [];
  private _countries: string[] = [];
  private _positions: string[] = [];
  private _leg: string[] = ['Right', 'Left'];
  private _teamNameToIdMapper: Map<string, number> = new Map();
  private _teamIdToNameMapper: Map<number, string> = new Map();
  private _countryToTeams: Map<string, string[]> = new Map();
  public avgStatsForGoalkeeper = [0, 0, 30, 6, 1, 1, 3];
  public avgStatsForDefender = [2, 3, 15, 21, 6, 3, 16];
  public avgStatsForMiddfilder = [6, 9, 15, 21, 4, 2, 23];
  public avgStatsForStriker = [10, 8, 15, 21, 3, 1, 19];
  public avgStatsPerPosition: Map<string, number[]> = new Map();

  constructor() {
    this.positions = [
      'Goalkeeper',
     'Defender',
     'Midfielder',
     'Striker'
    ];

    this.avgStatsPerPosition.set('Goalkeeper', this.avgStatsForGoalkeeper);
    this.avgStatsPerPosition.set('Defender', this.avgStatsForDefender);
    this.avgStatsPerPosition.set('Midfielder', this.avgStatsForMiddfilder);
    this.avgStatsPerPosition.set('Striker', this.avgStatsForStriker);
  }

  get teams(): Team[] {
    return this._teams;
  }

  set teams(value: Team[]) {
    this._teams = value;
  }

  get countries(): string[] {
    return this._countries;
  }

  set countries(value: string[]) {
    this._countries = value;
  }

  get positions(): string[] {
    return this._positions;
  }

  set positions(value: string[]) {
    this._positions = value;
  }


  get leg(): string[] {
    return this._leg;
  }

  set leg(value: string[]) {
    this._leg = value;
  }

  set teamNameToIdMapper(value: Map<string, number>) {
    this._teamNameToIdMapper = value;
  }

  get teamNameToIdMapper(): Map<string, number> {
    return this._teamNameToIdMapper;
  }


  get teamIdToNameMapper(): Map<number, string> {
    return this._teamIdToNameMapper;
  }

  set teamIdToNameMapper(value: Map<number, string>) {
    this._teamIdToNameMapper = value;
  }

  get countryToTeams(): Map<string, string[]> {
    return this._countryToTeams;
  }

  set countryToTeams(value: Map<string, string[]>) {
    this._countryToTeams = value;
  }
}
