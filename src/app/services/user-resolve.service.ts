import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../models/User";
import {delay, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {


  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    console.log(+route.params['id']);
    return this.userService.getUser(+route.params['id']).pipe(delay(2000));
  }

}
