import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRowTitleComponent } from './search-row-title.component';

describe('SearchRowTitleComponent', () => {
  let component: SearchRowTitleComponent;
  let fixture: ComponentFixture<SearchRowTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRowTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRowTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
