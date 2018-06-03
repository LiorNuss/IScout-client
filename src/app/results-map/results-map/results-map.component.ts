import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import {Player} from "../../player-utils/entities/player";
import {GlobalDataService} from "../../shared/services/global-data.service";


// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-results-map',
  templateUrl: './results-map.component.html',
  styleUrls: ['./results-map.component.css']
})
export class ResultsMapComponent  {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 8;
  private _playersResults: Player[];
  markers: marker[] = [
    // {
    //   lat: 51.673858,
    //   lng: 7.815982,
    //   label: 'A',
    //   draggable: true
    // },
    // {
    //   lat: 51.373858,
    //   lng: 7.215982,
    //   label: 'B',
    //   draggable: false
    // },
    // {
    //   lat: 51.723858,
    //   lng: 7.895982,
    //   label: 'C',
    //   draggable: true
    // }
  ];

  constructor(private globalData: GlobalDataService) {
  }

  get playersResults(): Player[] {
    return this._playersResults;
  }

  @Input()
  set playersResults(playerResults: Player[]) {
    this._playersResults = playerResults;
    playerResults.forEach(playerResult => {
      let currTeam = this.globalData.teamsMap.get(playerResult.player_basic_Info.team);
      let marker = {
        lat: currTeam.lat,
        lng: currTeam.lon,
        draggable: false
      };
      this.markers.push(marker);
    });
  }

// clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }
  //
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }

  // markerDragEnd(m: marker, $event: MouseEvent) {
  //   console.log('dragEnd', m, $event);
  // }


}

