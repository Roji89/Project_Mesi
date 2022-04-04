import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:4000/auth"
  private loginUrl: string = this.baseUrl + '/login';

  token: string;

  constructor(private http: HttpClient) {
    this.token = '';
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post(this.loginUrl, {
      email: email,
      password: password
    })
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
