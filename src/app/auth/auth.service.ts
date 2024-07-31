import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedInUser?: User;

  constructor() { }

  public login(user: User) {
    this._loggedInUser = user;
    localStorage.setItem('user', JSON.stringify('user'));
  }

  public logOut(){
    localStorage.removeItem('user');
  }
}
