import {Component, OnInit, ViewChild} from '@angular/core';
import {ScouterRegistrationInfo} from "../classes/scouter-registration-info";
import {GlobalDataService} from "../../shared/services/global-data.service";
import {ScouterDaoService} from "../../scouter-util/scouter-dao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-scouter-registration',
  templateUrl: './scouter-registration.component.html',
  styleUrls: ['./scouter-registration.component.css']
})
export class ScouterRegistrationComponent implements OnInit {

  model: ScouterRegistrationInfo;
  disableTeamSelection:boolean = true;
  @ViewChild('scouterRegistrationForm') form: any;
  positions: string[];
  countries: string[];
  teams: string[];

  constructor(private globalData: GlobalDataService, private scouterDaoService: ScouterDaoService, private router: Router) {
    this.positions = this.globalData.positions;
    this.countries = Array.from(this.globalData.countryToTeams.keys());
    this.teams = Array.from(this.globalData.teamNameToIdMapper.keys());
    this.model = new ScouterRegistrationInfo();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.scouterDaoService.registerScouter(this.model).subscribe(() => {
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
