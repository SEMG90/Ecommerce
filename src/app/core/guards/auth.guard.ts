import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router, } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // services
  const returnRouter = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if(isPlatformBrowser(platformId) ){
    if( localStorage.getItem('userToken') !== null){
      return true;
    }
    else{
       // when failed login goto login component again
      returnRouter.navigate(['/login']);
      return false;
    }
  }
  else{
    return false;
  }
  
};
