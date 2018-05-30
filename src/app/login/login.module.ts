import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from "primeng/primeng";
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {PlayerLoginModule} from "../player-login/player-login.module";
import {ScouterLoginModule} from "../scouter-login/scouter-login.module";

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    PlayerLoginModule,
    ScouterLoginModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule { }
