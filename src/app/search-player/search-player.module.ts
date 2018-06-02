import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPlayerComponent } from './search-player/search-player.component';
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {FormsModule} from "@angular/forms";
import { SearchResultsComponent } from './search-results/search-results.component';
import { PlayerResultComponent } from './player-result/player-result.component';
import {SearchPlayerService} from "./search-player/search-player.service";
import {DataScrollerModule} from 'primeng/datascroller';
import { PlayerResultListComponent } from './player-result-list/player-result-list.component';
import {DataListModule} from "primeng/primeng";
import {MatToolbarModule, MatCardModule} from "@angular/material";
import {SearchRowModule} from "../search-row/search-row.module";

@NgModule({
  imports: [
    CommonModule,
    PlayerUtilsModule,
    FormsModule,
    DataScrollerModule,
    DataListModule,
    MatCardModule,
    MatToolbarModule,
  ],
  declarations: [SearchPlayerComponent, SearchResultsComponent, PlayerResultComponent, PlayerResultListComponent],
  exports: [SearchPlayerComponent, SearchResultsComponent, PlayerResultListComponent],
  providers: [SearchPlayerService]
})
export class SearchPlayerModule { }
