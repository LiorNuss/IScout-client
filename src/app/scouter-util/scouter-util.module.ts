import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ScouterDaoService} from "./scouter-dao.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  providers: [ScouterDaoService]
})
export class ScouterUtilModule { }
