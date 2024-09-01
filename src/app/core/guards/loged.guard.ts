import { inject } from '@angular/core';
import { CanActivateFn, Router, } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  // services
  const returnRouter = inject(Router)

  if( localStorage.getItem('userToken') !== null){
    returnRouter.navigate(['/home']);
    return false;
  }
  else{
     // when not login or register goto login component again
    
    return true;
  }
  
};
