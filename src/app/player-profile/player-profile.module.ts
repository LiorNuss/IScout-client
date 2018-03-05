import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    PlayerUtilsModule,MatCardModule
  ],
  declarations: [PlayerProfileComponent],
  exports: [PlayerProfileComponent]
})
export class PlayerProfileModule { }
