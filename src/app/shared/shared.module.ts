import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ServerConnectorService} from './services/server-connector.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ServerConnectorService]
})
export class SharedModule { }
