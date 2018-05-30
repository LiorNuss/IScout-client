import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerGraphComponent } from './player-graph/player-graph.component';
import {ChartModule} from "primeng/chart";

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [PlayerGraphComponent],
  exports: [PlayerGraphComponent]
})
export class PlayerGraphModule { }
