import { Injectable } from '@angular/core';
import {Team} from "../classes/team";

@Injectable()
export class GlobalDataService {
  private _teams: Team[] = [];
  private _countries: string[] = [];
  private _positions: string[] = [];
  private _prefferedFoot: string[] = [];
  private _teamMapper: Map<string, number> = new Map();

  constructor() { }


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

  get prefferedFoot(): string[] {
    return this._prefferedFoot;
  }

  set prefferedFoot(value: string[]) {
    this._prefferedFoot = value;
  }

  set teamMapper(value: Map<string, number>) {
    this._teamMapper = value;
  }

  get teamMapper(): Map<string, number> {
    return this._teamMapper;
  }
}
