import { TestBed, inject } from '@angular/core/testing';

import { LocaisService } from './locais.service';

describe('LocaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaisService]
    });
  });

  it('should be created', inject([LocaisService], (service: LocaisService) => {
    expect(service).toBeTruthy();
  }));
});
