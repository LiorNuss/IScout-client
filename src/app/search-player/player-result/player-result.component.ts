import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {Router} from "@angular/router";
import {GlobalDataService} from "../../shared/services/global-data.service";

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.component.html',
  styleUrls: ['./player-result.component.css']
})
export class PlayerResultComponent  implements OnInit  {
  private _player: Player;
  teamName: string;

  constructor(private router: Router, private globalData: GlobalDataService) {}


  get player(): Player {
    return this._player;
  }
    ngOnInit() {
    let playerToSmallPicMap = {
      "Cristiano Ronaldo" : 20801,
      "Lionel Messi" : 158023,
      "Luis Suarez" : 176580,
      "Neymar" : 190871,
      "Sergio Aguero" : 153079,
      "Manuel Neuer" : 167495,
      "Gareth Bale" : 173731,
      "Andres Iniesta" : 41,
      "Zlatan Ibrahimovic" : 41236,
      "Arjen Robben" : 9014,
      "Casemiro" : 200145,
      "Gonzalo Higuaín" : 167664,
      "mohamed salah" : 209331,
      "Sergio Ramos" : 155862
    };

    let posToShortPos = {
      'Goalkeeper': 'GK',
      'Defender': 'CB',
      'Midfielder': 'CM',
      'Striker': 'ST'
    }
  }

  @Input()
  set player(value: Player) {
    this._player = value;
    this.teamName = this.globalData.teamIdToNameMapper.get(this._player.player_basic_Info.team);
  }

  goToProfile() {
    this.router.navigate(['/profile', this._player.player_basic_Info.player_id]);
  }
}
