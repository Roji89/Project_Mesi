import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor() {
    this.token = '';
  }

  login(email: string, password: string): Promise<void> {
  return new Promise<void>(
      (res, rej) => {
      if(email === 'anny_barrero@hotmail.com' && password === 'unpassword') {
          this.token = 'mytoken';
          res();
        }
      }
    );
  }

  logout(): Promise<void> {
    return new Promise <void>(
      (res, rej) => {
        this.token = '';
        res();
      }
    );
  }
}
