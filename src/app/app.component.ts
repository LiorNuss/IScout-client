import {Component, OnInit} from '@angular/core';
import {PlayerDaoService} from './player-utils/services/player-dao.service';
import {Player} from './player-utils/entities/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private playerDaoService: PlayerDaoService) {
  }

  ngOnInit(): void {
    // this.playerDaoService.getPlayerLogin('liornuss', 'liornuss').subscribe(playerFromDao => {
    //   const player = new Player();
    //   player.name = playerFromDao['name'];
    //   console.log(player.name);
    //   }
    // );
  }
}
