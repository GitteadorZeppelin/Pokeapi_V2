import { TestBed } from '@angular/core/testing';

import { APikachuService } from './a-pikachu.service';

describe('APikachuService', () => {
  let service: APikachuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APikachuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
