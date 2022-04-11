import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: '',
    password: '',
  });
  error: string = '';

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
   * Submit register form
   */
  onSubmit(): void {
    let user: User = new User(
      '',
      '',
      this.registerForm.value['email'],
      this.registerForm.value['password']
    );

    this.authService.register(user).subscribe({
      next: (v) => this.navigateAfterRegister(v.token),
      error: (e) => this.showAlert(e.error),
    });
  }

  /**
   * Set user token then redirect to home page
   * @param token User token
   */
  navigateAfterRegister(token: string): void {
    this.authService.token = token;
    this.router.navigate(['']);
  }
}
