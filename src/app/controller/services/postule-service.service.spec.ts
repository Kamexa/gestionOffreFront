import { TestBed } from '@angular/core/testing';

import { PostuleServiceService } from './postule-service.service';

describe('PostuleServiceService', () => {
  let service: PostuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
