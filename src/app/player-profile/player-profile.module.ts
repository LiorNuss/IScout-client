import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {MatCardModule} from "@angular/material";
import {PlayerGraphModule} from "../player-graph/player-graph.module";
import { PlayerVideosComponent } from './player-videos/player-videos.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PlayerUtilsModule,
    MatCardModule,
    PlayerGraphModule,
    FormsModule
  ],
  declarations: [PlayerProfileComponent, PlayerVideosComponent],
  exports: [PlayerProfileComponent]
})
export class PlayerProfileModule { }
