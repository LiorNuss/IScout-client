import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {SearchPlayerService} from "../search-player/search-player.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  //@Input() players: Player[];
  players: Player[];
  constructor(private searchPlayerService: SearchPlayerService) {
    //this.players = this.searchPlayerService.players;
    this.createMockResults();
  }


  //TODO remove this method
  public createMockResults(): void {
    this.players = [];
    const player1 = new Player();
    player1.name = 'lior';
    player1.age = 23;
    player1.team = 'MHFC';
    player1.country = 'Israel';
    player1.leg = 'Right';
    player1.position = 'Striker';
    player1.goals = 14;
    player1.assists = 7;
    this.players.push(player1);

    const player2 = new Player();
    player2.name = 'tomer';
    player2.age = 24;
    player2.team = 'Arsenal';
    player2.country = 'England';
    player2.leg = 'Left';
    player2.position = 'Defender';
    player2.goals = 4;
    player2.assists = 2;
    this.players.push(player2);

    const player3 = new Player();

    player3.name = 'amir';
    player3.age = 34;
    player3.team = 'Milan';
    player3.country = 'Italy';
    player3.leg = 'Right';
    player3.position = 'Midfielder';
    player3.goals = 15;
    player3.assists = 18;
    this.players.push(player3);

    const player4 = new Player();
    player4.name = 'moshe';
    player4.age = 19;
    player4.team = 'Manchester United';
    player4.country = 'England';
    player4.leg = 'Left';
    player4.position = 'Goalkeeper';
    player4.goals = 1;
    player4.assists = 1;
    this.players.push(player4);
  }

  ngOnInit() {
  }

}
