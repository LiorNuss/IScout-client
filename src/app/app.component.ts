import {Component, OnInit} from '@angular/core';
import {PlayerDaoService} from './player-utils/services/player-dao.service';
import {Player} from './player-utils/entities/player';
import {InitService} from "./shared/services/init.service";
import {LoginService} from "./login/login.service";
import {Router} from "@angular/router";
import {User} from "./shared/classes/user";

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
  constructor(private initService: InitService, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
   this.initService.init();
  }

  logout() {
    this.loginService.user = new User();
    this.router.navigate(['/login']);
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
