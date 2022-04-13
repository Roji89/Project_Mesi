import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  error: string = ''

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {}

  showAlert(message: string): void {
    this.error = message
  }

  hideAlert(): void {
    this.error = '';
  }

  /**
   * Submit login form
   */
  onSubmit() {
    this.authService
      .login(this.loginForm.value["email"], this.loginForm.value["password"]).subscribe({
        next: (user) => this.navigateAfterLogin(user),
        error: (e) => {
        e.status !== 0
          ? this.showAlert(e.error)
          : this.showAlert("No network") // Handle network error
        }})
  }

  /**
   * Set user credentials then redirect to the profile page
   * @param user User 
   */
  navigateAfterLogin(user: User): void {
    this.authService.setUserCredentials(user);
    this.router.navigate(['profile']);
  }
}
