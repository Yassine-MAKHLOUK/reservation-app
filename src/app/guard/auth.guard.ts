import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const  authService = inject(AuthServiceService);
  const router = inject(Router);

  const expectedRole = route.data['role'];
  const isAuthenticated = authService.isAuthenticated();
  const userRoles = authService.fetchUserRoles(authService.getToken()!);

  if (isAuthenticated && (!expectedRole || userRoles == expectedRole)) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }

};
