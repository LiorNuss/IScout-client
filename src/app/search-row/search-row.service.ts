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
    this._allCategories.push('Name');
    this._allCategories.push('Age');
    this._allCategories.push('Favourite Leg');
    this._allCategories.push('Position');
    this._allCategories.push('Team');
    this._allCategories.push('Country');
    this._allCategories.push('Goals');
    this._allCategories.push('Assists');
    this._allCategories.push('Games In Linup');
    this._allCategories.push('Games From Bench');
    this._allCategories.push('Yellow Cards');
    this._allCategories.push('Red Cards');
    this._allCategories.push('Average KM');
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
