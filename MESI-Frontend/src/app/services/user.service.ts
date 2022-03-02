import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;

  constructor() {
    this.user = new User(
      'Anny',
      'Barrero',
      'anny_barrero@hotmail.com',
      'azerty'
    );

   }



   updateUser(updateuser:User) {
     this.user = updateuser;
   }

}
