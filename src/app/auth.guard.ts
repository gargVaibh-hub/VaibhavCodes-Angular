import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Here constructor can't be called so declare a variable and inject the Router service
  const _route = inject(Router);

  let loggedValue = localStorage.getItem('isLoggedIn');
  if (loggedValue === 'true') {
    alert('User Logged In!');
    return true;
  } else {
    alert('Log In Failed!');
    _route.navigate(['/chatbot']); // To navigate to Error 404 if the log in is failed
    return false;
  }
};
