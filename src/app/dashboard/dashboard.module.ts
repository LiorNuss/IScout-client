import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SearchRowModule} from "../search-row/search-row.module";
import {SearchPlayerModule} from "../search-player/search-player.module";
import {ResultsMapModule} from "../results-map/results-map.module";

@NgModule({
  imports: [
    CommonModule,
    SearchRowModule,
    SearchPlayerModule,
    ResultsMapModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
