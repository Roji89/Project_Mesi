import { Role } from './../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.API_URL + "auth"
  private loginUrl: string = this.baseUrl + '/login';
  private registerUrl: string = this.baseUrl + '/register';
  private _token: string;
  private _id: string;
  private role: string;
  isLogin = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this._token = '';
    this._id = '';
    this.role = '';
  }

  /**
   * Log user 
   * @param email User email
   * @param password User password
   * @returns Observable
   */
  login(email: string, password: string): Observable<any> {
    this.isLogin = true;
    return this.http.post(this.loginUrl, {
      email: email,
      password: password
    })
  }

  /**
   * Logout user
   */
  logout(): void {
    this._token = '';
    this.router.navigate(['']);
    this.isLogin = false;
  }

  /**
   * Register user
   * @param user User
   * @returns Observable
   */
  register(user: User): Observable<any> {
    return this.http.post(this.registerUrl, {
      email: user.email,
      password: user.password
    })
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  setUserCredentials(user: User) {
    this.id = user._id,
      this.token = user.token
  }

  clearUserCredentials(): void {
    this.id = '';
    this.token = '';
  }

  userIsLogged(): boolean {
    return this.token ? true : false;
  }

  haveRoleAccess(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'superadmin') {
      return true
    }
    else return false
  }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

}
