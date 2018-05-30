import { Component, OnInit } from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  player: Player;

  constructor(private playerDao: PlayerDaoService) {
    this.player = new Player();
  }

  ngOnInit() {
    // const playerToGet = new Player();
    // playerToGet.name = 'lior';
    // this.playerDao.searchPlayers(playerToGet).subscribe(playerData => {
    //   let playerBasicInfo = playerData[0]['player_basic_info'];
    //   this.player.name = playerBasicInfo.name;
    //   this.player.age = playerBasicInfo.age;
    //   this.player.country = playerBasicInfo.country;
    //   this.player.team = playerBasicInfo.team;
    //   this.player.leg = playerBasicInfo.leg;
    //   this.player.own_description = playerBasicInfo.own_description;
    //   this.player.position = playerBasicInfo.position;
    //
    //   let playerStatistics = playerData[0]['player_statistics'][0];
    //   this.player.goals = playerStatistics.goals;
    //   this.player.assists = playerStatistics.assists;
    //   this.player.average_km_per_game = playerStatistics.average_km_per_game;
    //   this.player.games_entered_from_bench = playerStatistics.games_entered_from_bench;
    //   this.player.games_in_starting_linup = playerStatistics.games_in_starting_linup;
    //   this.player.red_cards = playerStatistics.red_cards;
    //   this.player.year = playerStatistics.year;
    //   this.player.yellow_cards = playerStatistics.yellow_cards;
    //   console.log(this.player);
    // });
  }

}
