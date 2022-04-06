import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  showAlert(message: string): void {
    this.error = message
  }

  hideAlert(): void {
    this.error = '';
  }

  onSubmit(): void {
    let user: User = new User(
      this.registerForm.value['firstName'],
      this.registerForm.value['lastName'],
      this.registerForm.value['email'],
      this.registerForm.value['password']
    );

    this.authService.register(user).subscribe({
      next: (v) => console.log(v),
      error: (e) => this.showAlert(e.error),
    });
  }
}
