import { Component, OnInit } from '@angular/core';
import {Player} from "../../player-utils/entities/player";

@Component({
  selector: 'app-player-result-list',
  templateUrl: './player-result-list.component.html',
  styleUrls: ['./player-result-list.component.css']
})
export class PlayerResultListComponent implements OnInit {

  players: Player[];
  constructor() {
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
    //this.players.push(player1);

    const player2 = new Player();
    player2.name = 'tomer';
    player2.age = 24;
    player2.team = 'Arsenal';
    player2.country = 'England';
    player2.leg = 'Left';
    player2.position = 'Defender';
    player2.goals = 4;
    player2.assists = 2;
    //this.players.push(player3);

    const player3 = new Player();

    player3.name = 'אמיר';
    player3.age = 34;
    player3.team = 'מילאן';
    player3.country = 'איטליה';
    player3.leg = 'ימין';
    player3.position = 'קשר';
    player3.goals = 15;
    player3.assists = 18;
    player3.red_cards = 5;
    player3.yellow_cards = 7;
    player3.games_in_starting_linup = 34;
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
    this.players.push(player3);

    this.players.push(player3);
    this.players.push(player3);
    this.players.push(player3);
     // this.players.push(player3);
    // this.players.push(player3);
    // this.players.push(player3);
    // this.players.push(player3);
    // this.players.push(player3);

  }
  ngOnInit() {
  }

}
