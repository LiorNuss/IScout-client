export class Scouter {
  private _userId: number;
  private _scouterId: number;
  private _name: string;
  private _country: string;
  private _team: string;


  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get scouterId(): number {
    return this._scouterId;
  }

  set scouterId(value: number) {
    this._scouterId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get team(): string {
    return this._team;
  }

  set team(value: string) {
    this._team = value;
  }
}
