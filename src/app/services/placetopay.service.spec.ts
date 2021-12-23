import { TestBed } from '@angular/core/testing';

import { PlacetopayService } from './placetopay.service';

describe('PlacetopayService', () => {
  let service: PlacetopayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacetopayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
