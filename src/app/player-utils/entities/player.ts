import {PlayerBasicInfo} from "./player-basic-info";
import {PlayerStats} from "./player-stats";
export class Player {
  private _player_basic_Info: PlayerBasicInfo;
  private _player_statistics: PlayerStats[];

  constructor() {
  }

  get player_basic_Info(): PlayerBasicInfo {
    return this._player_basic_Info;
  }

  set player_basic_Info(value: PlayerBasicInfo) {
    this._player_basic_Info = value;
  }

  get player_statistics(): PlayerStats[] {
    return this._player_statistics;
  }

  set player_statistics(value: PlayerStats[]) {
    this._player_statistics = value;
  }
}
