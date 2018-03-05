import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from "primeng/primeng";
import {PlayerUtilsModule} from "../player-utils/player-utils.module";

@NgModule({
  imports: [
    CommonModule,
    InputTextModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent, PlayerUtilsModule]
})
export class LoginModule { }
