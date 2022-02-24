import { TestBed } from '@angular/core/testing';

import { EventDriverServiceService } from './event-driver-service.service';

describe('EventDriverServiceService', () => {
  let service: EventDriverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDriverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
