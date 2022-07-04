import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/user.model';
import { DataSharingService } from '../../services/data-sharing/data-sharing.service';

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
    private router: Router,
    private dataSharingService: DataSharingService
  ) { }

  ngOnInit(): void { }

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
    let user: User = {
      _id: '',
      email: this.registerForm.value['email'],
      password: this.registerForm.value['password'],
      token: '',
      role: 'user',
    };

    this.authService.register(user).subscribe({
      next: (user) => this.navigateAfterRegister(user),
      error: (e) => this.showAlert(e.error),
    });
  }

  /**
   * Set user credentials then redirect to the profile page
   * @param user User 
   */
  navigateAfterRegister(user: User): void {
    this.authService.setUserCredentials(user);
    this.dataSharingService.userIsLoggedIn.next(true);
    this.router.navigate(['profile']);
  }
}
