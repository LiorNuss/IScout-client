import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {Router} from "@angular/router";
import {GlobalDataService} from "../../shared/services/global-data.service";

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.component.html',
  styleUrls: ['./player-result.component.css']
})
export class PlayerResultComponent {
  private _player: Player;
  teamName: string;

  constructor(private router: Router, private globalData: GlobalDataService) {}


  get player(): Player {
    return this._player;
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
