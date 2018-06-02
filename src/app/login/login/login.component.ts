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
  userRole:boolean = true;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.userRole) {
      this.loginService.playerLogin(this.username.nativeElement.value, this.password.nativeElement.value);
    }
    else {
      this.loginService.scouterLogin(this.username.nativeElement.value, this.password.nativeElement.value);
    }
  }

  registerClick() {
    if (this.userRole) {
      this.router.navigate(['/playerRegistration']);
    }
    else {
      this.router.navigate(['/scouterRegistration']);
    }
  }
}
