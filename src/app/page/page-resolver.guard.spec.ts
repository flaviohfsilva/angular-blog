import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pageResolverGuard } from './page-resolver.guard';

describe('pageResolverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => pageResolverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
