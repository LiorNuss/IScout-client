import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRowComponent } from './search-row.component';

describe('SearchRowComponent', () => {
  let component: SearchRowComponent;
  let fixture: ComponentFixture<SearchRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
