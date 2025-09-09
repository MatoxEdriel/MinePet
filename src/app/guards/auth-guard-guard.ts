import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../features/auth/services/Auth.service';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuardGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);

    const platformId = inject(PLATFORM_ID); 

   if (isPlatformBrowser(platformId)) {
    if (auth.isLoggedIn()) {
      return true;
    } else {
      router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

  return false;
};