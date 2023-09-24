import { TestBed } from '@angular/core/testing';

import { LoadingscreenInterceptor } from './loadingscreen.interceptor';

describe('LoadingscreenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingscreenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingscreenInterceptor = TestBed.inject(LoadingscreenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
