import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PlayerDaoService} from './services/player-dao.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  providers: [PlayerDaoService]
})
export class PlayerUtilsModule { }
