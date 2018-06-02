import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScouterRegistrationComponent } from './scouter-registration.component';

describe('ScouterRegistrationComponent', () => {
  let component: ScouterRegistrationComponent;
  let fixture: ComponentFixture<ScouterRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScouterRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScouterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
