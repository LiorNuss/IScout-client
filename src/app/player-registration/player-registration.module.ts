import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PlayerRegistrationComponent],
  exports: [PlayerRegistrationComponent]
})
export class PlayerRegistrationModule { }
