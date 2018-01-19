import { TestBed, async, inject } from '@angular/core/testing';

import { MyauthguardGuard } from './myauthguard.guard';

describe('MyauthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyauthguardGuard]
    });
  });

  it('should ...', inject([MyauthguardGuard], (guard: MyauthguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
