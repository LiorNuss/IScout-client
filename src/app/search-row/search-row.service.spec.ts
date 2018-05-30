import { TestBed, inject } from '@angular/core/testing';

import { SearchRowService } from './search-row.service';

describe('SearchRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRowService]
    });
  });

  it('should be created', inject([SearchRowService], (service: SearchRowService) => {
    expect(service).toBeTruthy();
  }));
});
