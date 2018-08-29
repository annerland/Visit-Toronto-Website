import { TestBed, inject } from '@angular/core/testing';

import { ViagemService } from './viagem.service';

describe('ViagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViagemService]
    });
  });

  it('should be created', inject([ViagemService], (service: ViagemService) => {
    expect(service).toBeTruthy();
  }));
});
