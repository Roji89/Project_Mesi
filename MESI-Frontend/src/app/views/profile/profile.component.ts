import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message: string = '';

  profileForm: FormGroup = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
  })

  passwordForm: FormGroup = this.formBuilder.group({
    oldPassword: '',
    password: ''
  })

  user: User = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    token: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserInfos();
  }

  showAlert(message: string): void {
    this.message = message
    setTimeout(() => this.message = '', 3000);
  }

  /**
   * Get users infos then fill up the form
   */
  getUserInfos(): void {
    this.userService.getUser({
      _id: this.authService.id,
      token: this.authService.token
    }).subscribe({
      next: (user) => {
        this.profileForm = this.formBuilder.group({
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          password: ''
        });
      },
      error: (e) => this.showAlert(e.error),
    })
  }

  /**
   * Submit profile data
   */
  onSubmitProfileForm() {
    let user: User = {
      _id: this.authService.id,
      first_name: this.profileForm.value['firstName'],
      last_name: this.profileForm.value['lastName'],
      email: this.profileForm.value['email'],
      token: this.authService.token
    }

    this.userService.updateUser(user).subscribe({
      next: (data) => {
        this.showAlert(data.message)
        this.profileForm = this.formBuilder.group({
          firstName: data.user.first_name,
          lastName: data.user.last_name,
          email: data.user.email
        });
      },
      error: (e) => this.showAlert(e.error),
    })
  }

  /**
   * Submit password data
   */
  onSubmitPasswordForm() {
    let user: User = {
      _id: this.authService.id,
      token: this.authService.token,
      old_password: this.passwordForm.value['oldPassword'],
      password: this.passwordForm.value['password']
    }

    this.userService.updateUser(user).subscribe({
      next: (data) => {
        this.showAlert(data.message)
        this.passwordForm = this.formBuilder.group({
          oldPassword: '',
          password: ''
        });
      },
      error: (e) => this.showAlert(e.error),
    })
  }

}
