import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-search-row-title',
  templateUrl: './search-row-title.component.html',
  styleUrls: ['./search-row-title.component.css']
})
export class SearchRowTitleComponent implements OnInit {
  private _currentCategory: string

  get currentCategory(): string {
    return this._currentCategory;
  }

  @Input()
  set currentCategory(value: string) {
    if (value == "") {
      this._currentCategory = 'חפש:';
    }
    else {
      this._currentCategory = 'חפש לפי ' + value + ' :';
    }
  }

  ngOnInit() {
  }

}
