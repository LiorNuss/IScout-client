export class PlayerBasicInfo {
  private _player_id: number;
  private _name: string;
  private _age: number;
  private _leg: string;
  private _position: string;
  private _team: number;
  private _country: string;
  private _videos_url: string[];
  private _img: string;
  private _own_description: string;

  constructor() {
  }

  get player_id(): number {
    return this._player_id;
  }

  set player_id(value: number) {
    this._player_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get leg(): string {
    return this._leg;
  }

  set leg(value: string) {
    this._leg = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get team(): number {
    return this._team;
  }

  set team(value: number) {
    this._team = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get videos_url(): string[] {
    return this._videos_url;
  }

  set videos_url(value: string[]) {
    this._videos_url = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }


  get own_description(): string {
    return this._own_description;
  }

  set own_description(value: string) {
    this._own_description = value;
  }
}
