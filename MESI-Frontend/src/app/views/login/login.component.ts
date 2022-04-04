import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    console.log(message)
    this.error = message
  }

  hideAlert(): void {
    this.error = '';
  }

  /** method called when user try to login */
  onSubmit() {
    this.authService
      .login(this.loginForm.value["email"], this.loginForm.value["password"]).subscribe({
        next: (v) => this.navigateAfterLogin(v.token),
        error: (e) => {
        e.status !== 0
          ? this.showAlert(e.error)
          : this.showAlert("No network") // Handle network error
        }})
  }

  navigateAfterLogin(token: string): void {
    this.authService.token = token;
    this.router.navigate([''])
  }
}
