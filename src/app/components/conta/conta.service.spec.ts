import { TestBed, inject } from '@angular/core/testing';

import { ContaService } from './conta.service';

describe('ContaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContaService]
    });
  });

  it('should be created', inject([ContaService], (service: ContaService) => {
    expect(service).toBeTruthy();
  }));
});
