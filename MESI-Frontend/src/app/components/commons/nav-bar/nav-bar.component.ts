import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing/data-sharing.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn?: boolean;
  isUserAdmin?: boolean;

  constructor(
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    private router: Router
  ) {
    this.dataSharingService.userIsLoggedIn.subscribe(value => this.isUserLoggedIn = value);
    this.dataSharingService.userIsAdmin.subscribe(value => this.isUserAdmin = value);

  }

  ngOnInit(): void {
  }

  onClickLogout(): void {
    this.authService.clearUserCredentials();
    this.dataSharingService.userIsLoggedIn.next(false);
  }
}
