import { Injectable } from '@angular/core';
import {User} from "../shared/classes/user";
import {PlayerDaoService} from "../player-utils/services/player-dao.service";
import {ScouterDaoService} from "../scouter-util/scouter-dao.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
  private _user: User;

  constructor(private playerDao: PlayerDaoService,
              private scouterDao: ScouterDaoService,
              private router: Router) {
    this.user = new User();
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  public playerLogin(username: string, password: string): void {
    this.playerDao.getPlayerLogin(username, password).subscribe(playerData => {
      this._user.id = playerData.user_id;
      this._user.entityId = playerData.player_id;
      this._user.type = "player";
      console.log(this._user.id);
      console.log(this._user.entityId);
      this.router.navigate(['/dashboard']);
    }, error => {

    } );
  }

  public scouterLogin(username: string, password: string): void {
    this.scouterDao.getScouterLogin(username, password).subscribe(scouterData => {
      this._user.id = scouterData.user_id;
      this._user.entityId = scouterData.scouter_id;
      this._user.type = "scouter";
      console.log(this._user.id);
      console.log(this._user.entityId);
      this.router.navigate(['/dashboard']);
    });
  }
}
