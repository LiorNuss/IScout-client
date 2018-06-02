import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../player-utils/entities/player";
import {Router} from "@angular/router";
import {GlobalDataService} from "../../shared/services/global-data.service";

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.component.html',
  styleUrls: ['./player-result.component.css']
})
export class PlayerResultComponent {
  private _player: Player;
  teamName: string;
  position: string;
  lastName: string;
  imgPrefix: string = "https://cdn.futbin.com/content/fifa18/img/players/";
  imgSuffix: string = ".png?v=8";
  imgFullPath: string;
  imgNotFoundUrl: string = '../../../assets/emptyman.png';
  countryImgPath: string = "https://cdn.futbin.com/content/fifa18/img/nation/";
  clubPath: string;

  playerToSmallPicMap = {
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

   posToShortPos = {
  'Goalkeeper': 'GK',
  'Defender': 'CB',
  'Midfielder': 'CM',
  'Striker': 'ST'
}

   countryToImgMap = {
  "Portugal" : 38,
  "Argentina" : 52,
  "Uruguay" : 60,
  "Brazil" : 54,
  "Germany" : 21,
  "Wales" : 50,
  "Spain" : 45,
  "Sweden" : 46,
  "Netherlands" : 34,
  "Egypt" : 111,
  "France" : 18,
  "England" : 14,
  "Italy" : 27,
  "Israel" : 26
}

   baseClubPicPath = "https://cdn.futbin.com/content/fifa18/img/clubs/";

   clubToImgMap = {
  "Hapoel Tel Aviv" : "../../../assets/Hapoel_Tel_Aviv_Logo.png",
  "Maccabi Tel Aviv" : "../../../assets/Maccabi_Tel_Aviv_Logo.png",
  "Maccabi Haifa" : "../../../assets/Maccabi_Haifa_Logo.png",
  "Beitar Jerusalem" : "../../../assets/Beitar_Jerusalem_Logo.png",
  "Real Madrid C.F." : this.baseClubPicPath + "243" + ".png",
  "Atlético Madrid" : this.baseClubPicPath + "240" + ".png",
  "FC Barcelona" : this.baseClubPicPath + "241" + ".png",
  "Paris Saint-Germain F.C." : this.baseClubPicPath + "73" + ".png",
  "AS Monaco FC" : this.baseClubPicPath + "69" + ".png",
  "A.C. Milan" : this.baseClubPicPath + "47" + ".png",
  "Juventus F.C." : this.baseClubPicPath + "45" + ".png",
  "Liverpool F.C." : this.baseClubPicPath + "9" + ".png",
  "Arsenal F.C." : this.baseClubPicPath + "1" + ".png",
  "Manchester City F.C." : this.baseClubPicPath + "10" + ".png",
  "Manchester United F.C." : this.baseClubPicPath + "11" + ".png",
  "Chelsea F.C." : this.baseClubPicPath + "5" + ".png",
  "FC Bayern München" : this.baseClubPicPath + "21" + ".png"
}

  constructor(private router: Router, private globalData: GlobalDataService) {}


  get player(): Player {
    return this._player;
  }

  @Input()
  set player(value: Player) {
    this._player = value;
    this.position = this.posToShortPos[this._player.player_basic_Info.position];
    let spaceIndex = this._player.player_basic_Info.name.indexOf(' ');
    this.lastName = this._player.player_basic_Info.name.substring(spaceIndex);
    this.teamName = this.globalData.teamIdToNameMapper.get(this._player.player_basic_Info.team);

    if (this.playerToSmallPicMap.hasOwnProperty(this._player.player_basic_Info.name)) {
      this.imgFullPath = this.imgPrefix + this.playerToSmallPicMap[this._player.player_basic_Info.name] + this.imgSuffix;
    }
    else {
      this.imgFullPath = this.imgNotFoundUrl;
    }
    this.countryImgPath += this.countryToImgMap[this._player.player_basic_Info.country] +".png";
    this.clubPath = this.clubToImgMap[this.teamName];
  }

  goToProfile() {
    this.router.navigate(['/profile', this._player.player_basic_Info.player_id]);
  }
}
