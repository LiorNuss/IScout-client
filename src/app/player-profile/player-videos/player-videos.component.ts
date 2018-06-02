import { Component, OnInit } from '@angular/core';
import {VideoEdit} from "../classes/video-edit";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-player-videos',
  templateUrl: './player-videos.component.html',
  styleUrls: ['./player-videos.component.css']
})
export class PlayerVideosComponent implements OnInit {
  model: VideoEdit;
  videoPrefix = "https://www.youtube.com/embed/";
  videoFull: any;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  videoUpload(videoUrl: string) {
    // this.videoUrl = videoUrl;
    let index = videoUrl.lastIndexOf('=');
    let urlSuffix = videoUrl.substring(index + 1);
    let fullPath = this.videoPrefix + urlSuffix;
    console.log("youtubeeeeee");
    console.log(fullPath);
    this.videoFull = this.sanitizer.bypassSecurityTrustResourceUrl(fullPath);
    //console.log(this.videoFull);
  }

  onSubmit() {}
}
