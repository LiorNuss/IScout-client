import {Component, Input, OnInit} from '@angular/core';
import {VideoEdit} from "../classes/video-edit";
import {DomSanitizer} from "@angular/platform-browser";
import {PlayerDaoService} from "../../player-utils/services/player-dao.service";
import {Player} from "../../player-utils/entities/player";

@Component({
  selector: 'app-player-videos',
  templateUrl: './player-videos.component.html',
  styleUrls: ['./player-videos.component.css']
})
export class PlayerVideosComponent implements OnInit {
  @Input() player: Player;
  @Input() permissions: boolean;
  model: VideoEdit;
  videoPrefix = "https://www.youtube.com/embed/";
  videoFull: any;
  isVideoExists: boolean = false;

  constructor(private sanitizer: DomSanitizer, private playerDao: PlayerDaoService) { }

  ngOnInit() {
    if (this.player.player_basic_Info.videos_url.length > 0) {
      this.videoFull = this.sanitizer.
      bypassSecurityTrustResourceUrl(this.player.player_basic_Info.videos_url[this.player.player_basic_Info.videos_url.length - 1] + '?autoplay=1');
      this.isVideoExists = true;
    }
  }

  videoUpload(videoUrl: string) {
    // this.videoUrl = videoUrl;
    let index = videoUrl.lastIndexOf('=');
    let urlSuffix = videoUrl.substring(index + 1);
    let fullPath = this.videoPrefix + urlSuffix;
    this.playerDao.uploadVideo(this.player.player_basic_Info.player_id, fullPath).subscribe(() => {
      console.log(fullPath);
      this.videoFull = this.sanitizer.bypassSecurityTrustResourceUrl(fullPath);
      this.isVideoExists = true;
    });
  }

  onSubmit() {}
}
