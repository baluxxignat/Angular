import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // doSomeStuff () {
  //   console.log('message');
  // }

  getUsers(): Observable <UserModel []> {
    return this.httpClient.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
