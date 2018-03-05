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
  }

}
