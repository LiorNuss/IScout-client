import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScouterRegistrationComponent } from './scouter-registration/scouter-registration.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ScouterRegistrationComponent],
  exports: [ScouterRegistrationComponent]
})
export class ScouterRegistrationModule { }
