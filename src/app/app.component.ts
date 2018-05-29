import {Component, OnInit} from '@angular/core';
import {PlayerDaoService} from './player-utils/services/player-dao.service';
import {Player} from './player-utils/entities/player';

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

  constructor(private playerDaoService: PlayerDaoService) {
  }

  ngOnInit(): void {
    // this.playerDaoService.getPlayerLogin('liornuss', 'liornuss').subscribe(playerFromDao => {
    //   const player = new Player();
    //   player.name = playerFromDao['name'];
    //   console.log(player.name);
    //   }
    // );
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
}
