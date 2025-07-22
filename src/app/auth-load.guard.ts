import { CanActivateFn } from '@angular/router';

export const authLoadGuard: CanActivateFn = (route, state) => {
  let isLogged: boolean = false;

  // This is canLoad guard implementation
  if (isLogged) {
    return true;
  }
  alert('No Access!');
  return false;
};
