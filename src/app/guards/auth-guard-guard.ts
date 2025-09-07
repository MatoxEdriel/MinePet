import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../features/auth/services/Auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  } else {
    return router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } });
  }
};