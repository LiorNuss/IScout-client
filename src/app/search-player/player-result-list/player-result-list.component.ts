import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {SearchRowService} from "../../search-row/search-row.service";
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-player-result-list',
  templateUrl: './player-result-list.component.html',
  styleUrls: ['./player-result-list.component.css']
})
export class PlayerResultListComponent implements OnInit{
  public resultContent: boolean = false;

  public players: Player[] = [];
  constructor(private searchService: SearchRowService,
              private loginService: LoginService) {}

  getSearchResults(): void {
    console.log(this.searchService.searchPlayersResults);
    if (this.searchService.searchPlayersResults.length > 0) {
      this.players = Array.from(this.searchService.searchPlayersResults);
    }
    else {
      this.players = [];
    }
  }


  ngOnInit(): void {
    this.searchService.searchResultEvent.subscribe(() => this.getSearchResults());
    if (this.searchService.searchPlayersResults.length > 0) {
      this.players = Array.from(this.searchService.searchPlayersResults);
    }
  }

  pageNext(): void {
    this.searchService.currentPage += 1;
    this.searchService.searchPlayers(this.searchService.filtersForSearch,this.searchService.currentPage);
  }

  pagePrev(): void {
    if (this.searchService.currentPage !== 1) {
      this.searchService.currentPage -= 1;
      this.searchService.searchPlayers(this.searchService.filtersForSearch,this.searchService.currentPage);
    }
  }
}
