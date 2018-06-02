import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {PlayerRegistrationInfo} from "../classes/player-registration-info";
import {GlobalDataService} from "../../shared/services/global-data.service";
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {
   model: PlayerRegistrationInfo;
   @ViewChild('playerRegistrationForm') form: any;
   disableTeamSelection:boolean = true;
   positions: string[];
   countries: string[];
   teams: string[];

  constructor(private globalData: GlobalDataService, private playerDao: PlayerDaoService, private router: Router) {
    this.positions = this.globalData.positions;
    this.countries = Array.from(this.globalData.countryToTeams.keys());
    this.teams = Array.from(this.globalData.teamNameToIdMapper.keys());
    this.model = new PlayerRegistrationInfo();
    this.model.age = 18;
    this.model.leg = 'ימין';
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.playerDao.registerPlayer(this.model).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  // selectCountry(country: string) {
  //   this.disableTeamSelection = false;
  //   console.log("selecteed country is: " + country);
  //   this.teams = this.globalData.countryToTeams.get(country);
  // }
  //
  // selectTeam(team: string) {
  //   this.model.team_id = this.globalData.teamNameToIdMapper.get(team);
  // }
}
