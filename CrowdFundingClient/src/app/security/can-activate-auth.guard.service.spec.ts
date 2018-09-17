import { TestBed, inject } from '@angular/core/testing';

import { CanActivateAuth.GuardService } from './can-activate-auth.guard.service';

describe('CanActivateAuth.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAuth.GuardService]
    });
  });

  it('should be created', inject([CanActivateAuth.GuardService], (service: CanActivateAuth.GuardService) => {
    expect(service).toBeTruthy();
  }));
});
