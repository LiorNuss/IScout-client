import {Component, Input, OnInit} from '@angular/core';
import {PlayerDaoService} from "../../../player-utils/services/player-dao.service";
import {Player} from "../../../player-utils/entities/player";

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {
  imageUrl: string;
  @Input() player: Player;
  @Input() permissions: boolean;
  constructor(private playerDao: PlayerDaoService) { }

  ngOnInit() {
    if (this.player.player_basic_Info.img) {
      this.imageUrl = this.player.player_basic_Info.img;
    }
    else {
      this.imageUrl = '../../../../assets/emptyman.png';
    }
  }

  getImage(imageEvent: any) { // called each time file input changes
    if (imageEvent.target.files && imageEvent.target.files[0]) {
      let reader = new FileReader();
      let file = imageEvent.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = (myEvent) => { // called once readAsDataURL is completed
         this.uploadImage(reader.result);
      };
    }
  }

  uploadImage(imageUrl: string) {
    this.playerDao.uploadImage(this.player.player_basic_Info.player_id, imageUrl).subscribe(() => {
      this.imageUrl = imageUrl;
    })
  }
}
