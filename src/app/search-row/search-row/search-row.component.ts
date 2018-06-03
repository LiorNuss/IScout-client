import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChipsModule} from 'primeng/chips';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from "@angular/material";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {startWith, map} from "rxjs/operators";
import {SearchRowService} from "../search-row.service";
import {GlobalDataService} from "../../shared/services/global-data.service";

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.css']
})
export class SearchRowComponent implements OnInit{
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;
  separatorKeysCodes = [ENTER];
  @ViewChild('fruitInput') fruitInput: ElementRef;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<any[]>;
  //currentAutoComplete = [];
  //autoCompleteOptions: Map<string, any[]> = new Map();
  chosenCategory: string;
  positions: string[] = [];
  teams: string[] = [];
  countries: string[] = [];
  leg: string[] = ['ימין', 'שמאל'];
  fruits = [
    // { name: 'Lemon' },
  ];
  // searchCategoriesMapper = {
  //    'תפקיד' : 'position',
  //   'מדינה' : 'country',
  //   'קבוצה' : 'team',
  //   'שם השחקן': 'name',
  //   'גיל': 'age',
  //   'רגל מועדפת': 'leg',
  //   'גולים': 'goals',
  //   'בישולים': 'assists',
  //   'משחקים בהרכב': 'games_in_starting_linup',
  //   'משחקים בספסל': 'games_entered_from_bench',
  //   'כרטיסים צהובים': 'yellow_cards',
  //   'כרטיסים אדומים': 'red_cards',
  //   'ממוצע קילומטרים': 'average_km_per_game',
  // };
  //
  //
  // searchCategories = Object.keys(this.searchCategoriesMapper);

  // roles = [
  //   'שוער',
  //   'מגן',
  //   'קשר',
  //   'חלוץ'
  // ];

  // country = [
  //   'ישראל',
  //   'אנגליה',
  //   'איטליה',
  //   'ספרד'
  // ];

  // team = [
  //   'ארסמל',
  //   'ליברפול',
  //   'באיירן מינכן',
  //   'ריאל מדריד',
  //   'ברצלונה'
  // ];

  constructor(public searchRowService: SearchRowService,
              private globalData: GlobalDataService) {
  }

  ngOnInit(): void {
    // this.positions = this.globalData.positions;
    // this.countries = this.globalData.countries;
    // this.teams = Array.from(this.globalData.teamNameToIdMapper.keys());

    if (this.searchRowService.filtersForSearch.length > 0) {
      this.fruits = this.searchRowService.filtersForSearch;
    }
    else {
      if (this.searchRowService.searchPlayersResults.length === 0) {
        this.search();
      }
    }

    // this.autoCompleteOptions.set('תפקיד', this.positions);
    // this.autoCompleteOptions.set('מדינה', this.countries);
    // this.autoCompleteOptions.set('קבוצה', this.teams);
    // this.autoCompleteOptions.set('רגל מועדפת', this.leg);
    // this.autoCompleteOptions.set('שם השחקן', []);
    // this.autoCompleteOptions.set('גיל', []);
    // this.autoCompleteOptions.set('גולים', []);
    // this.autoCompleteOptions.set('בישולים', []);
    // this.autoCompleteOptions.set('משחקים בהרכב', []);
    // this.autoCompleteOptions.set('משחקים בספסל', []);
    // this.autoCompleteOptions.set('כרטיסים צהובים', []);
    // this.autoCompleteOptions.set('כרטיסים אדומים', []);
    // this.autoCompleteOptions.set('ממוצע קילומטרים', []);
    //  this.searchRowService.allCategories = this.searchCategories;
    //this.currentAutoComplete = this.searchCategories;
      this.initAutoComplete();

  }

  initAutoComplete(): void {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this.filter(fruit) : this.searchRowService.currentAutoComplete.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.addSearchFilter(value);
    }

    if (input) {
      input.value = '';
    }

  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      const indexToRemove = this.searchRowService.chosenCategories.indexOf(fruit.category);
      this.searchRowService.chosenCategories.splice(indexToRemove, 1);
      this.searchRowService.searchCategories.push(fruit.category);
    }
  }

  filter(name: string) {
    return this.searchRowService.currentAutoComplete.filter(fruit =>
    fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.searchRowService.currentAutoComplete === this.searchRowService.searchCategories) {
      this.chosenCategory = event.option.viewValue + " :";

      if (this.searchRowService.autoCompleteOptions.has(event.option.viewValue)) {
        this.changeCurrentCategory(event.option.viewValue);
      }
    }
    else {
      this.addSearchFilter(event.option.viewValue);
    }
    this.fruitInput.nativeElement.value = '';

  }

  changeCurrentCategory(category: string) {
    this.searchRowService.currentAutoComplete = this.searchRowService.autoCompleteOptions.get(category);
    this.searchRowService.currentCategory = category;
  }

  addSearchFilter(tagValue: string) {
    let tagValueForSearch = tagValue.trim();

    if (this.searchRowService.currentCategory === 'Team') {
      tagValueForSearch = this.globalData.teamNameToIdMapper.get(tagValue.trim()).toString();
    }

    this.fruits.push({ name: this.searchRowService.currentCategory + ": " + tagValue.trim(),
                       category: this.searchRowService.currentCategory,
                       value: tagValueForSearch,
                       categoryForSearch: this.searchRowService.searchCategoriesMapper[this.searchRowService.currentCategory]});

    this.searchRowService.chosenCategories.push(this.searchRowService.currentCategory);
    this.searchRowService.searchCategories =
      this.searchRowService.searchCategories.filter(category => this.searchRowService.chosenCategories.indexOf(category) === -1);
    this.searchRowService.currentAutoComplete = this.searchRowService.searchCategories;
    this.searchRowService.currentCategory = "";
  }

  search() {
    this.searchRowService.searchPlayers(this.fruits, 1);
  }
}
