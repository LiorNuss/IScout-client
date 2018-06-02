export class PlayerStats {
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
}
