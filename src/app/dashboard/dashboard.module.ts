import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SearchRowModule} from "../search-row/search-row.module";
import {SearchPlayerModule} from "../search-player/search-player.module";

@NgModule({
  imports: [
    CommonModule,
    SearchRowModule,
    SearchPlayerModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
