import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {GlobalDataService} from "../../shared/services/global-data.service";

@Component({
  selector: 'app-player-graph',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.css']
})
export class PlayerGraphComponent {
  data: any;
  private _player: Player;
  constructor(private globalData: GlobalDataService) {
    this.data = {
      labels: ['גולים', 'בישולים', 'משחקים בהרכב', 'משחקים בספסל', 'כרטיסים צהובים', 'כרטיסים אדומים', 'ממוצע קילומטרים'],
      datasets: [
        {
          label: 'Player Stats',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: []
        },
        {
          label: 'Average Stats',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: []
        }
      ]
    };
  }


  get player(): Player {
    return this._player;
  }

  @Input()
  set player(player: Player) {
    this._player = player;
    let avgStats = this.globalData.avgStatsPerPosition.get(this._player.player_basic_Info.position);
    let playerStats = [];
    playerStats.push(this._player.player_statistics[0].goals);
    playerStats.push(this._player.player_statistics[0].assists);
    playerStats.push(this._player.player_statistics[0].games_in_starting_linup);
    playerStats.push(this._player.player_statistics[0].games_entered_from_bench);
    playerStats.push(this._player.player_statistics[0].yellow_cards);
    playerStats.push(this._player.player_statistics[0].red_cards);
    playerStats.push(this._player.player_statistics[0].average_km_per_game);
    this.data.datasets[0].data = playerStats;
    this.data.datasets[1].data = avgStats;
  }
}
