import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from "primeng/primeng";
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {ScouterUtilModule} from "../scouter-util/scouter-util.module";
import {LoginService} from "./login.service";

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    PlayerUtilsModule,
    ScouterUtilModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
