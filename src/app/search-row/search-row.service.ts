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
  currentAutoComplete = [];
  searchCategoriesMapper = {
    'תפקיד' : 'position',
    'מדינה' : 'country',
    'קבוצה' : 'team',
    'שם השחקן': 'name',
    'גיל': 'age',
    'רגל מועדפת': 'leg',
    'גולים': 'goals',
    'בישולים': 'assists',
    'משחקים בהרכב': 'games_in_starting_linup',
    'משחקים בספסל': 'games_entered_from_bench',
    'כרטיסים צהובים': 'yellow_cards',
    'כרטיסים אדומים': 'red_cards',
    'ממוצע קילומטרים': 'average_km_per_game',
  };

  searchCategories = Object.keys(this.searchCategoriesMapper);

  constructor(private playerDao: PlayerDaoService, private loginService: LoginService, private globalData: GlobalDataService) {
    this._searchPlayersResults = [];
    this._autoCompleteOptions.set('תפקיד', this.globalData.positions);
    this._autoCompleteOptions.set('מדינה', this.globalData.countries);
    this._autoCompleteOptions.set('קבוצה', Array.from(this.globalData.teamNameToIdMapper.keys()));
    this._autoCompleteOptions.set('רגל מועדפת', this.globalData.leg);
    this._autoCompleteOptions.set('שם השחקן', []);
    this._autoCompleteOptions.set('גיל', []);
    this._autoCompleteOptions.set('גולים', []);
    this._autoCompleteOptions.set('בישולים', []);
    this._autoCompleteOptions.set('משחקים בהרכב', []);
    this._autoCompleteOptions.set('משחקים בספסל', []);
    this._autoCompleteOptions.set('כרטיסים צהובים', []);
    this._autoCompleteOptions.set('כרטיסים אדומים', []);
    this._autoCompleteOptions.set('ממוצע קילומטרים', []);
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
