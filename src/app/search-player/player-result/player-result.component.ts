import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.component.html',
  styleUrls: ['./player-result.component.css']
})
export class PlayerResultComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

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

}
