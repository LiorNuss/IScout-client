import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";
import {Player} from "../../player-utils/entities/player";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  player: Player;

  constructor(private playerDao: PlayerDaoService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.playerDao.getPlayerLogin(this.username.nativeElement.value, this.password.nativeElement.value).subscribe(playerData => {
      this.player = playerData;
      }
    );
  }
}
