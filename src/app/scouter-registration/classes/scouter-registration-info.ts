export class ScouterRegistrationInfo {
  private _name: string;
  private _team_id: number;
  private _team_name: number;
  private _country: string;
  private _username: string;
  private _password: string;


  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get team_id(): number {
    return this._team_id;
  }

  set team_id(value: number) {
    this._team_id = value;
  }

  get team_name(): number {
    return this._team_name;
  }

  set team_name(value: number) {
    this._team_name = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
