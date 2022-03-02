import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  /** method called when user try to login */
  onSubmitLoginForm() {
    this.authService
    .login('anny_barrero@hotmail.com', 'unpassword')
    .then(() => {
      //When promise is succesful
      this.router.navigateByUrl('user-board');
    });
  }


}
