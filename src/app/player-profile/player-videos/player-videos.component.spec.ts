import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVideosComponent } from './player-videos.component';

describe('PlayerVideosComponent', () => {
  let component: PlayerVideosComponent;
  let fixture: ComponentFixture<PlayerVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
