import { TestBed, inject } from '@angular/core/testing';

import { SearchPlayerService } from './search-player.service';

describe('SearchPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchPlayerService]
    });
  });

  it('should be created', inject([SearchPlayerService], (service: SearchPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
