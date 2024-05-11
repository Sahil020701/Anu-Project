import { TestBed } from '@angular/core/testing';

import { KnowMeService } from './know-me.service';

describe('KnowMeService', () => {
  let service: KnowMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
