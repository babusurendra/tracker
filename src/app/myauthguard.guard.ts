import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyauthguardGuard implements CanActivate {
   constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    

 if(localStorage.getItem('accessToken')){
      return true;
    }

    this.router.navigate(['login']);

    return false;

  }
}
