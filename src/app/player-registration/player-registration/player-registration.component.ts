import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from "../../player-utils/entities/player";

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {
   model: Player;
   @ViewChild('playerRegistrationForm') form: any;
   positions: string[];
   countries: string[];
   teams: string[];
  constructor() {
    this.positions = ['GoalKeeper', 'Defender', 'Midfielder', 'Striker'];
    this.countries = ['USA', 'England', 'Italy', 'France', 'Germany', 'Israel'];
    this.teams = ['Arsenal', 'Chelsea', 'Manchester United', 'Barcelona', 'Real Madrid', 'Maccabi Haifa'];
    this.model = new Player();
    this.model.age = 18;
    this.model.leg = 'Right';
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value.name);
  }
}
