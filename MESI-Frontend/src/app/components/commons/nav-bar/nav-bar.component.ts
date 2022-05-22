import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing/data-sharing.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  searchForm = this.formBuilder.group({
    search: '',
  });

  isUserLoggedIn?: boolean;

  constructor(
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.dataSharingService.userIsLoggedIn.subscribe(
      (value) => (this.isUserLoggedIn = value)
    );
  }

  ngOnInit(): void {}

  onClickLogout(): void {
    this.authService.clearUserCredentials();
    this.dataSharingService.userIsLoggedIn.next(false);
  }

  onSubmit(): void {
    this.router.navigate(['search'], {
      queryParams: { q: this.searchForm.value['search'] },
    });
  }
}
