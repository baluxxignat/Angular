import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModule} from "../modules/postModule";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModule []> {
    return this.httpClient.get<PostModule[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
