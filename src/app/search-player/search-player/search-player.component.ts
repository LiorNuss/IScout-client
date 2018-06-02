import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Player} from '../../player-utils/entities/player';
import {PlayerDaoService} from '../../player-utils/services/player-dao.service';
import {SearchPlayerService} from "./search-player.service";
import {consoleTestResultHandler} from "tslint/lib/test";

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent {
//   implements
// } OnInit {
//   // model: Player;
  // positions: string[];
  // countries: string[];
  // teams: string[];
  // legs: string[];
  // @Output() searchEvent = new EventEmitter();
  //
  // constructor(private playerDao: PlayerDaoService,
  //             private searchService: SearchPlayerService) {
  //   this.positions = ['GoalKeeper', 'Defender', 'Midfielder', 'Striker'];
  //   this.legs = ['', 'Right', 'Left'];
  //   this.countries = ['USA', 'England', 'Italy', 'France', 'Germany', 'Israel'];
  //   this.teams = ['Arsenal', 'Chelsea', 'Manchester United', 'Barcelona', 'Real Madrid', 'Maccabi Haifa'];
  //   this.model = new Player();
  //  // this.model.age = 18;
  // }
  //
  // ngOnInit() {
  // }
  //
  // search(): void {
  //   // console.log(this.model);
  //   // const searchPlayersResult = [];
  //   // this.playerDao.searchPlayers(this.model).subscribe(playersData => {
  //   //   playersData.forEach(playerData => {
  //   //     const playerResult = new Player();
  //   //     const player_basic_Info = playerData[0]['player_basic_info'];
  //   //     playerResult.name = player_basic_Info.name;
  //   //     playerResult.age = player_basic_Info.age;
  //   //     playerResult.country = player_basic_Info.country;
  //   //     playerResult.team = player_basic_Info.team;
  //   //     playerResult.leg = player_basic_Info.leg;
  //   //     playerResult.own_description = player_basic_Info.own_description;
  //   //     playerResult.position = player_basic_Info.position;
  //   //
  //   //     const playerStatistics = playerData[0]['player_statistics'][0];
  //   //     playerResult.goals = playerStatistics.goals;
  //   //     playerResult.assists = playerStatistics.assists;
  //   //     playerResult.average_km_per_game = playerStatistics.average_km_per_game;
  //   //     playerResult.games_entered_from_bench = playerStatistics.games_entered_from_bench;
  //   //     playerResult.games_in_starting_linup = playerStatistics.games_in_starting_linup;
  //   //     playerResult.red_cards = playerStatistics.red_cards;
  //   //     playerResult.year = playerStatistics.year;
  //   //     playerResult.yellow_cards = playerStatistics.yellow_cards;
  //   //     console.log(playerResult);
  //   //     searchPlayersResult.push(playerResult);
  //   //   });
  //   //
  //   //   this.searchService.players = searchPlayersResult;
  //   //   console.log('Search Service');
  //   //   console.log(this.searchService.players);
  //   // } );
  // }
  //
  // onSubmit(): void {
  //   this.searchEvent.emit();
  // }
}
