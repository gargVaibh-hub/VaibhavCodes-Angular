import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resolvGuard } from './resolv.guard';

describe('resolvGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resolvGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
