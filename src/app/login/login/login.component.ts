import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";
import {Player} from "../../player-utils/entities/player";
import {PlayerLoginService} from "../../player-login/player-login.service";
import {ScouterLoginService} from "../../scouter-login/scouter-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  player: Player;
  @Output() login = new EventEmitter();
  @Output() register = new EventEmitter();

  constructor(private playerLoginService: PlayerLoginService,
              private scouterLoginService: ScouterLoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.playerDao.getPlayerLogin(this.username.nativeElement.value, this.password.nativeElement.value).subscribe(playerData => {
    //   this.player = playerData;
    //   }
    // );
    //this.playerLoginService.playerLogin(this.username.nativeElement.value, this.password.nativeElement.value);
    this.scouterLoginService.scouterLogin(this.username.nativeElement.value, this.password.nativeElement.value);

  }

  registerClick() {
    this.register.emit();
  }
}
