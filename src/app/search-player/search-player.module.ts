import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPlayerComponent } from './search-player/search-player.component';
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {FormsModule} from "@angular/forms";
import { SearchResultsComponent } from './search-results/search-results.component';
import { PlayerResultComponent } from './player-result/player-result.component';
import {SearchPlayerService} from "./search-player/search-player.service";
import {DataScrollerModule} from 'primeng/datascroller';

@NgModule({
  imports: [
    CommonModule,
    PlayerUtilsModule,
    FormsModule,
    DataScrollerModule
  ],
  declarations: [SearchPlayerComponent, SearchResultsComponent, PlayerResultComponent],
  exports: [SearchPlayerComponent, SearchResultsComponent],
  providers: [SearchPlayerService]
})
export class SearchPlayerModule { }
