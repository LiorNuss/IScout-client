import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-row-catagories',
  templateUrl: './search-row-catagories.component.html',
  styleUrls: ['./search-row-catagories.component.css']
})
export class SearchRowCatagoriesComponent implements OnInit {
  @Input() chosenCategories;
  @Input() currentCategory;
  @Input() allCategories;
  @Output() categoryClick = new EventEmitter();
  constructor() {
    this.chosenCategories = [];
  }

  ngOnInit() {
  }

  onCategoryClick(category: string) {
    if (this.currentCategory !== category && this.chosenCategories.indexOf(category) === -1) {
      this.categoryClick.emit(category);
    }
  }
}
