import { Injectable } from '@angular/core';
import {PlayerDaoService} from "../player-utils/services/player-dao.service";
import {Player} from "../player-utils/entities/player";
import {LoginService} from "../login/login.service";

@Injectable()
export class SearchRowService {
  private _currentCategory: string = "";
  private _chosenCategories: string[] = [];
  private _allCategories: string[] = [];
  private _filtersForSearch: any[] = [];
  private searchPlayersResults: Player[] = [];

  constructor(private playerDao: PlayerDaoService, private loginService: LoginService) {
    this._allCategories.push('שם השחקן');
    this._allCategories.push('גיל');
    this._allCategories.push('רגל מועדפת');
    this._allCategories.push('תפקיד');
    this._allCategories.push('קבוצה');
    this._allCategories.push('מדינה');
    this._allCategories.push('גולים');
    this._allCategories.push('בישולים');
    this._allCategories.push('משחקים בהרכב');
    this._allCategories.push('משחקים בספסל');
    this._allCategories.push('כרטיסים צהובים');
    this._allCategories.push('כרטיסים אדומים');
    this._allCategories.push('ממוצע קילומטרים');
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

  searchPlayers(filtersForSearch: any[], page: number) {
    this.filtersForSearch = filtersForSearch;
    this.playerDao.searchPlayers(filtersForSearch, page, this.loginService.user.id).subscribe(playersData => console.log(playersData));
  }
}
