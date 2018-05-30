import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRowCatagoriesComponent } from './search-row-catagories.component';

describe('SearchRowCatagoriesComponent', () => {
  let component: SearchRowCatagoriesComponent;
  let fixture: ComponentFixture<SearchRowCatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRowCatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRowCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
