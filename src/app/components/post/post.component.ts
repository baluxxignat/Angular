import {Component, Input, OnInit} from '@angular/core';
import {PostModule} from "../../modules/postModule";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModule;

  constructor() { }

  ngOnInit(): void {
  }

}
