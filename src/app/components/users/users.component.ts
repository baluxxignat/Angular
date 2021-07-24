import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [
    {name: 'petia', age: 31, status: true},
    {name: 'vasia', age: 30, status: true},
    {name: 'serhey', age: 18, status: false},
    {name: 'olia', age: 22, status: true},
    {name: 'yulia', age: 14, status: false},
    {name: 'Anjey', age: 36, status: true},
    {name: 'Simon', age: 33, status: false},
    {name: 'Stanislav', age: 34, status: true},
    {name: 'Kevin', age: 30, status: true},
    {name: 'Benjamin', age: 19, status: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
