import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export interface UserBio{
  username?: string, email?: string, bio?: string
}
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() lastname: string;
  @Input() email: string;

  constructor(private userService: UserService,
    private router: Router) {
      this.id = 0;
      this.name = '';
      this.lastname = '';
      this.email = '';
    }

  ngOnInit(): void {
  }

  //Modification d'un produit
  onClickEditUser() {
    this.router.navigate(['name', 'edit', this.id])
  }

}
