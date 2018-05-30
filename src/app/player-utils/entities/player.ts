export class Player {
  private _userId: number;
  private _playerId: number;
  private _name: string;
  private _age: number;
  private _leg: string;
  private _position: string;
  private _team: string;
  private _country: string;
  private _videosUrl: string[];
  private _image: string;

  // TODO change to standart
  private _own_description: string;
  private _year: number;
  private _goals: number;
  private _assists: number;
  private _games_in_starting_linup: number;
  private _games_entered_from_bench: number;
  private _yellow_cards: number;
  private _red_cards: number;
  private _average_km_per_game: number;


  constructor() {
  }

  // constructor(name: string,
  //             age: number,
  //             leg: string,
  //             position: string,
  //             team: string,
  //             country: string,
  //             own_description: string,
  //             year: number,
  //             goals: number,
  //             assists: number,
  //             games_in_starting_linup: number,
  //             games_entered_from_bench: number,
  //             yellow_cards: number,
  //             red_cards: number,
  //             average_km_per_game: number) {
  //   this._name = name;
  //   this._age = age;
  //   this._leg = leg;
  //   this._position = position;
  //   this._team = team;
  //   this._country = country;
  //   this._own_description = own_description;
  //   this._year = year;
  //   this._goals = goals;
  //   this._assists = assists;
  //   this._games_in_starting_linup = games_in_starting_linup;
  //   this._games_entered_from_bench = games_entered_from_bench;
  //   this._yellow_cards = yellow_cards;
  //   this._red_cards = red_cards;
  //   this._average_km_per_game = average_km_per_game;
  // }


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

  get team(): string {
    return this._team;
  }

  set team(value: string) {
    this._team = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get own_description(): string {
    return this._own_description;
  }

  set own_description(value: string) {
    this._own_description = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get goals(): number {
    return this._goals;
  }

  set goals(value: number) {
    this._goals = value;
  }

  get assists(): number {
    return this._assists;
  }

  set assists(value: number) {
    this._assists = value;
  }

  get games_in_starting_linup(): number {
    return this._games_in_starting_linup;
  }

  set games_in_starting_linup(value: number) {
    this._games_in_starting_linup = value;
  }

  get games_entered_from_bench(): number {
    return this._games_entered_from_bench;
  }

  set games_entered_from_bench(value: number) {
    this._games_entered_from_bench = value;
  }

  get yellow_cards(): number {
    return this._yellow_cards;
  }

  set yellow_cards(value: number) {
    this._yellow_cards = value;
  }

  get red_cards(): number {
    return this._red_cards;
  }

  set red_cards(value: number) {
    this._red_cards = value;
  }

  get average_km_per_game(): number {
    return this._average_km_per_game;
  }

  set average_km_per_game(value: number) {
    this._average_km_per_game = value;
  }


  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get playerId(): number {
    return this._playerId;
  }

  set playerId(value: number) {
    this._playerId = value;
  }

  get videosUrl(): string[] {
    return this._videosUrl;
  }

  set videosUrl(value: string[]) {
    this._videosUrl = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
