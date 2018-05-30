import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ServerConnectorService} from './services/server-connector.service';
import {InitService} from "./services/init.service";
import {GlobalDataService} from "./services/global-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ServerConnectorService, InitService, GlobalDataService]
})
export class SharedModule { }
