import {Component, OnInit} from '@angular/core';
import {PlayerDaoService} from './player-utils/services/player-dao.service';
import {Player} from './player-utils/entities/player';
import {InitService} from "./shared/services/init.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  registarion = false;
  profile = false;
  searchPlayer = false;
  searchResults = false;
  login = true;
  dashboard = false;
  constructor(private initService: InitService) {
  }

  ngOnInit(): void {
   this.initService.init();
  }

  registrationClick() {
    this.registarion = true;
    this.searchPlayer = false;
    this.profile = false;
    this.searchResults = false;
    this.login = false;
  }

  searchPlayerClick() {
    this.registarion = false;
    this.searchPlayer = true;
    this.profile = false;
    this.searchResults = false;
    this.login = false;
  }

  profileClick() {
    this.registarion = false;
    this.searchPlayer = false;
    this.profile = true;
    this.searchResults = false;
    this.login = false;
  }

  searchResultsClick() {
    this.registarion = false;
    this.searchPlayer = false;
    this.profile = false;
    this.searchResults = true;
    this.login = false;
  }

  loginClick() {
    this.registarion = false;
    this.searchPlayer = false;
    this.profile = false;
    this.searchResults = false;
    this.login = true;
  }

  dashboardClick() {
    this.dashboard = true;
    this.registarion = false;
    this.searchPlayer = false;
    this.profile = false;
    this.searchResults = false;
    this.login = false;
  }
}
