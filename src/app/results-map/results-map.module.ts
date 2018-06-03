import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsMapComponent } from './results-map/results-map.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5DbSrAti1RzLVAK0us0W9PxrkQ36LY8I'
    })
  ],
  declarations: [ResultsMapComponent],
  exports: [ResultsMapComponent]
})
export class ResultsMapModule { }
