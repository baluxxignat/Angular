import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }

}
