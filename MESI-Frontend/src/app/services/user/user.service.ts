import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.API_URL + 'auth';
  private userUrl: string = this.baseUrl + '/user/';

  constructor(private http: HttpClient) {}

  getUser(user: User): Observable<any> {
    const headers = new HttpHeaders({ 'x-access-token': user.token });
    return this.http.get(this.userUrl + user._id, { headers: headers });
  }

  updateUser(user: User): Observable<any> {
    const headers = new HttpHeaders({ 'x-access-token': user.token });
    return this.http.put(this.userUrl + user._id, user, { headers: headers });
  }
}
