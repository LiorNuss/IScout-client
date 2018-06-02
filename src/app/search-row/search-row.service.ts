import { Injectable } from '@angular/core';
import {PlayerDaoService} from '../player-utils/services/player-dao.service';
import {Player} from '../player-utils/entities/player';
import {LoginService} from '../login/login.service';
import {Observable, Subject} from "rxjs";
import {GlobalDataService} from "../shared/services/global-data.service";

@Injectable()
export class SearchRowService {
  private _currentCategory = '';
  private _chosenCategories: string[] = [];
  private _allCategories: string[] = [];
  private _filtersForSearch: any[] = [];
  private _searchPlayersResults: Player[] = [];
  public searchResultEvent: Subject<any> = new Subject<any>();
  private _autoCompleteOptions: Map<string, any[]> = new Map();
  public currentPage = 1;
  currentAutoComplete = [];
  searchCategoriesMapper = {
    'Position' : 'position',
    'Country' : 'country',
    'Team' : 'team',
    'Name': 'name',
    'Age': 'age',
    'Favourite Leg': 'leg',
    'Goals': 'goals',
    'Assists': 'assists',
    'Games In Linup': 'games_in_starting_linup',
    'Games From Bench': 'games_entered_from_bench',
    'Yellow Cards': 'yellow_cards',
    'Red Cards': 'red_cards',
    'Average KM': 'average_km_per_game',
  };

  searchCategories = Object.keys(this.searchCategoriesMapper);

  constructor(private playerDao: PlayerDaoService, private loginService: LoginService, private globalData: GlobalDataService) {
    this._searchPlayersResults = [];
    this._autoCompleteOptions.set('Position', this.globalData.positions);
    this._autoCompleteOptions.set('Country', this.globalData.countries);
    this._autoCompleteOptions.set('Team', Array.from(this.globalData.teamNameToIdMapper.keys()));
    this._autoCompleteOptions.set('Favourite Leg', this.globalData.leg);
    this._autoCompleteOptions.set('Name', []);
    this._autoCompleteOptions.set('Age', []);
    this._autoCompleteOptions.set('Goals', []);
    this._autoCompleteOptions.set('Assists', []);
    this._autoCompleteOptions.set('Games In Linup', []);
    this._autoCompleteOptions.set('Games From Bench', []);
    this._autoCompleteOptions.set('Yellow Cards', []);
    this._autoCompleteOptions.set('Red Cards', []);
    this._autoCompleteOptions.set('Average KM', []);
    this.allCategories = this.searchCategories;
    this.currentAutoComplete = this.searchCategories;
  }

  get currentCategory(): string {
    return this._currentCategory;
  }

  set currentCategory(value: string) {
    this._currentCategory = value;
  }

  get chosenCategories(): string[] {
    return this._chosenCategories;
  }

  set chosenCategories(value: string[]) {
    this._chosenCategories = value;
  }


  get allCategories(): string[] {
    return this._allCategories;
  }

  set allCategories(value: string[]) {
    this._allCategories = value;
  }

  get filtersForSearch(): any[] {
    return this._filtersForSearch;
  }

  set filtersForSearch(value: any[]) {
    this._filtersForSearch = value;
  }


  get searchPlayersResults(): Player[] {
    return this._searchPlayersResults;
  }

  set searchPlayersResults(value: Player[]) {
    this._searchPlayersResults = value;
  }

  //
  // get searchResultEvent(): Observable<any> {
  //   return this._searchResultEvent.asObservable();
  // }


  get autoCompleteOptions(): Map<string, any[]> {
    return this._autoCompleteOptions;
  }

  set autoCompleteOptions(value: Map<string, any[]>) {
    this._autoCompleteOptions = value;
  }

  searchPlayers(filtersForSearch: any[], page: number) {
    this.filtersForSearch = filtersForSearch;
    this.searchPlayersResults = [];
    this.playerDao.searchPlayers(filtersForSearch, this.loginService.user.id, page).subscribe(playersData => {
      this.searchPlayersResults = [];
      playersData.forEach(currPlayerData => {
        let player = new Player();
        //player = currPlayerData;
         let basicInfo = (<any>currPlayerData).player_basic_info;
         let playerStats = (<any>currPlayerData).player_statistics;
         player.player_basic_Info = basicInfo;
         player.player_statistics = playerStats;
        console.log(player);
        this._searchPlayersResults.push(player);
      });

      this.searchResultEvent.next();
    });
  }
}
