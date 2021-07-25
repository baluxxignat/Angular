import {Component, Input, OnInit} from '@angular/core';
import {PostModule} from "../../modules/postModule";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: PostModule[];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value;
      console.log(this.posts);
    })
  }

  ngOnInit(): void {
  }

}
