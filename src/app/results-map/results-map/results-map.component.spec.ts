import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMapComponent } from './results-map.component';

describe('ResultsMapComponent', () => {
  let component: ResultsMapComponent;
  let fixture: ComponentFixture<ResultsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
