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
  styleUrls: ['./search-row.component.css'],
  providers: [SearchRowService]
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
  currentAutoComplete = [];
  autoCompleteOptions: Map<string, any[]> = new Map();
  chosenCategory: string;
  teams = [];
  fruits = [
    // { name: 'Lemon' },
  ];
  searchCategoriesMapper = {
     'תפקיד' : 'position',
    'מדינה' : 'country',
    'קבוצה' : 'team',
    'גולים': 'goals'
  };

  searchCategories = Object.keys(this.searchCategoriesMapper);

  roles = [
    'שוער',
    'מגן',
    'קשר',
    'חלוץ'
  ];

  country = [
    'ישראל',
    'אנגליה',
    'איטליה',
    'ספרד'
  ];

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
    this.globalData.teams.forEach(team => this.teams.push(team.name));
    this.autoCompleteOptions.set(this.searchCategories[0], this.roles);
    this.autoCompleteOptions.set(this.searchCategories[1], this.country);
    this.autoCompleteOptions.set(this.searchCategories[2], this.teams);
    this.autoCompleteOptions.set(this.searchCategories[3], []);
    this.currentAutoComplete = this.searchCategories;
    this.initAutoComplete();
  }

  initAutoComplete(): void {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this.filter(fruit) : this.currentAutoComplete.slice()));
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
      this.searchCategories.push(fruit.category);
    }
  }

  filter(name: string) {
    return this.currentAutoComplete.filter(fruit =>
    fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.currentAutoComplete === this.searchCategories) {
      this.chosenCategory = event.option.viewValue + " :";

      if (this.autoCompleteOptions.has(event.option.viewValue)) {
        this.changeCurrentCategory(event.option.viewValue);
      }
    }
    else {
      this.addSearchFilter(event.option.viewValue);
    }
    this.fruitInput.nativeElement.value = '';

  }

  changeCurrentCategory(category: string) {
    this.currentAutoComplete = this.autoCompleteOptions.get(category);
    this.searchRowService.currentCategory = category;
  }

  addSearchFilter(tagValue: string) {
    let tagValueForSearch = tagValue.trim();

    if (this.searchRowService.currentCategory === 'קבוצה') {
      tagValueForSearch = this.globalData.teamMapper.get(tagValue.trim()).toString();
    }

    this.fruits.push({ name: this.searchRowService.currentCategory + ": " + tagValue.trim(),
                       category: this.searchRowService.currentCategory,
                       value: tagValueForSearch,
                       categoryForSearch: this.searchCategoriesMapper[this.searchRowService.currentCategory]});

    this.searchRowService.chosenCategories.push(this.searchRowService.currentCategory);
    this.searchCategories =
      this.searchCategories.filter(category => this.searchRowService.chosenCategories.indexOf(category) === -1);
    this.currentAutoComplete = this.searchCategories;
    this.searchRowService.currentCategory = "";
  }

  search() {
    this.searchRowService.searchPlayers(this.fruits, 1);
  }
}
