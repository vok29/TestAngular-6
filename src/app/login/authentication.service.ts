import { Injectable } from '@angular/core';
import { IUser } from './model/user';

const USER_STORAGE_KEY = 'angular-crm.user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: IUser = null;
  constructor() {
    // check if user connected ?
    if (sessionStorage.getItem(USER_STORAGE_KEY) !== null) {
      this.currentUser = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
    }
  }

  public get authenticated(): boolean {
    return this.currentUser !== null;
  }


  authentUser(login: string, password: string): any {
    this.currentUser = {
      id: 1,
      login: login,
      lastname: 'Wick',
      firstname: 'John',
    };

    sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.currentUser));
    return this.currentUser;

  }
  disconnect(): void {
    this.currentUser = null;
    sessionStorage.removeItem(USER_STORAGE_KEY);
  }
}
