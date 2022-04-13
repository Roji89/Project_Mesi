import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl: string = "http://localhost:4000/auth"
  private userUrl: string = this.baseUrl + '/login';

  constructor(
    private http: HttpClient
  ) {}


  getUserInfos(user: User): Observable<any> {
    return this.http.get('/' + user.id)
  }

}
