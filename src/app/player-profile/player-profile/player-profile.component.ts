import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
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
export class PlayerProfileComponent implements OnInit, OnDestroy{

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
     if (this.loginService.user.entityId == this.player.player_basic_Info.player_id) {
       this.permissions = true;
     }
     else {
       this.permissions = false;
     }

     this.basicInfoLoaded = true;

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
   if (this.permissions) {
     this.playerDao.saveOwnDescription(this.player.player_basic_Info.player_id, this.playerDescription).subscribe(() => {
         // this.player.player_basic_Info.own_description = descriptionText;
       }
     );
   }
  }


  ngOnDestroy(): void {
   console.log("profile destroyedddddd");
  }
}
