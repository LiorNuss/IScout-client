import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerResultListComponent } from './player-result-list.component';

describe('PlayerResultListComponent', () => {
  let component: PlayerResultListComponent;
  let fixture: ComponentFixture<PlayerResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
