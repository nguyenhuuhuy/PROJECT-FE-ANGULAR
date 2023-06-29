import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";



@Injectable({
  providedIn: 'root'
})
export class CheckRoleUser implements CanActivate{
  constructor(private tokenService:TokenService,
              private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.tokenService.getToken();
    let role = this.tokenService.getRole();
    if (token == null){
      this.router.navigate(['/login'])
      return false;
    } else {
      if (role == undefined || role.length == 0){
        this.router.navigate(['/login'])
        return false
      } else {
        let roleName = findAccRole(role);
        if (roleName != 'ADMIN'){
          this.router.navigate([''])
          return false
        } else {
          return true;
        }
      }
    }
  }

}
export function findAccRole(roles: string[]) {
  let roleName = 'USER';
  for (let i = 0; i < roles.length; i++) {
    if (roles[i] == 'ADMIN') {
      roleName = 'ADMIN';
      break;
    }
    if (roles[i] == 'PM') {
      roleName = 'PM';
    }
  }
  return roleName;
}
