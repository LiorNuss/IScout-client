import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRowComponent } from './search-row/search-row.component';
import {ChipsModule} from "primeng/chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatIconModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchRowTitleComponent } from './search-row-title/search-row-title.component';
import { SearchRowCatagoriesComponent } from './search-row-catagories/search-row-catagories.component';
import {ButtonModule} from 'primeng/button';
import {PlayerUtilsModule} from "../player-utils/player-utils.module";
import {SearchRowService} from "./search-row.service";
import {LoginModule} from "../login/login.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ButtonModule,
    PlayerUtilsModule,
    LoginModule,
    SharedModule
  ],
  declarations: [SearchRowComponent, SearchRowTitleComponent, SearchRowCatagoriesComponent],
  exports: [SearchRowComponent],
  providers: [SearchRowService]
})
export class SearchRowModule { }
