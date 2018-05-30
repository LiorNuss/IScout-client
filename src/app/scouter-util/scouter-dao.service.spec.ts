import { TestBed, inject } from '@angular/core/testing';

import { ScouterDaoService } from './scouter-dao.service';

describe('ScouterDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScouterDaoService]
    });
  });

  it('should be created', inject([ScouterDaoService], (service: ScouterDaoService) => {
    expect(service).toBeTruthy();
  }));
});
