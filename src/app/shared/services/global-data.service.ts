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

  constructor() {
    this.positions = [
      'Goalkeeper',
     'Defender',
     'Midfielder',
     'Striker'
    ];
  }

''
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
