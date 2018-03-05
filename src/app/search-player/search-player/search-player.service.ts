import { Injectable } from '@angular/core';
import {Player} from "../../player-utils/entities/player";

@Injectable()
export class SearchPlayerService {
  players: Player[];
  constructor() { }

}
