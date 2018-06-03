import {Component, ElementRef, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../login/login.service";
import { Location } from '@angular/common';
import {GlobalDataService} from "../../shared/services/global-data.service";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit{

 player: Player;
 basicInfoLoaded: boolean = false;
 statsLoaded: boolean = false;
 teamName:string;
 permissions: boolean = false;
 playerDescription: string = 'Player own description...';

 constructor(private router: ActivatedRoute,
             private playerDao: PlayerDaoService,
             private loginService: LoginService,
             private globalData: GlobalDataService,
             private location: Location) {
   this.player = new Player();
 }


  ngOnInit(): void {
   console.log("visited profileeee");
   this.router.params.subscribe(params => {
     this.getPlayer(this.loginService.user.id, params['playerId']);
   });
  }

  getPlayer(userId: number, playerId: number) {
   this.playerDao.getPlayerInfo(userId, playerId).subscribe(playerInfo => {
     this.player.player_basic_Info = playerInfo;
     this.player.player_basic_Info.player_id = playerId;

     if (this.player.player_basic_Info.own_description) {
       this.playerDescription = this.player.player_basic_Info.own_description;
     }

     this.teamName = this.globalData.teamIdToNameMapper.get(this.player.player_basic_Info.team);
     this.basicInfoLoaded = true;

     if (this.loginService.user.entityId === this.player.player_basic_Info.player_id) {
       this.permissions = true;
     }
     else {
       this.permissions = false;
     }
   });

    this.playerDao.getPlayerStats(playerId).subscribe(playerStats => {
      this.player.player_statistics = playerStats;
      this.statsLoaded = true;
    });
  }

  goBack(): void {
    this.location.back();
  }

  saveDescription(): void {
   this.playerDao.saveOwnDescription(this.player.player_basic_Info.player_id, this.playerDescription).subscribe(() => {
      // this.player.player_basic_Info.own_description = descriptionText;
     }
   );
  }
//
  // constructor(private playerDao: PlayerDaoService) {
  //   this.player = new Player();
  // }
  //
  // ngOnInit() {
  //   // const playerToGet = new Player();
  //   // playerToGet.name = 'lior';
  //   // this.playerDao.searchPlayers(playerToGet).subscribe(playerData => {
  //   //   let player_basic_Info = playerData[0]['player_basic_info'];
  //   //   this.player.name = player_basic_Info.name;
  //   //   this.player.age = player_basic_Info.age;
  //   //   this.player.country = player_basic_Info.country;
  //   //   this.player.team = player_basic_Info.team;
  //   //   this.player.leg = player_basic_Info.leg;
  //   //   this.player.own_description = player_basic_Info.own_description;
  //   //   this.player.position = player_basic_Info.position;
  //   //
  //   //   let playerStatistics = playerData[0]['player_statistics'][0];
  //   //   this.player.goals = playerStatistics.goals;
  //   //   this.player.assists = playerStatistics.assists;
  //   //   this.player.average_km_per_game = playerStatistics.average_km_per_game;
  //   //   this.player.games_entered_from_bench = playerStatistics.games_entered_from_bench;
  //   //   this.player.games_in_starting_linup = playerStatistics.games_in_starting_linup;
  //   //   this.player.red_cards = playerStatistics.red_cards;
  //   //   this.player.year = playerStatistics.year;
  //   //   this.player.yellow_cards = playerStatistics.yellow_cards;
  //   //   console.log(this.player);
  //   // });
  // }

}
