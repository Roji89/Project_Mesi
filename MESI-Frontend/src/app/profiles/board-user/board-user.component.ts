import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface UserBio{
  username?: string, email?: string, bio?: string
}
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
