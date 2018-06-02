import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";
import {Player} from "../../player-utils/entities/player";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

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
  isPlayerLogin:boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.isPlayerLogin) {
      this.loginService.playerLogin(this.username.nativeElement.value, this.password.nativeElement.value);
    }
    else {
      this.loginService.scouterLogin(this.username.nativeElement.value, this.password.nativeElement.value);
    }
  }

  registerClick() {
    if (this.isPlayerLogin) {
      this.router.navigate(['/playerRegistration']);
    }
    else {
      this.router.navigate(['/scouterRegistration']);
    }
  }

  playerClick() {
    this.isPlayerLogin = true;
    console.log("PLAYER CLICKEDDDDDDDDDD");
  }

  scouterClick() {
    this.isPlayerLogin = false;
    console.log("SCOUTER CLICKEDDDDDDDDDD");
  }
}
