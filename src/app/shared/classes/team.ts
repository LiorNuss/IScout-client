export class Team {
  private _id: number;
  private _country: string;
  private _name: string;
  private _lat: number;
  private _lon: number;


  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lat(): number {
    return this._lat;
  }

  set lat(value: number) {
    this._lat = value;
  }

  get lon(): number {
    return this._lon;
  }

  set lon(value: number) {
    this._lon = value;
  }
}
