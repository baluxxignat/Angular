import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../../models/genre";

@Component({
  selector: 'app-genr',
  templateUrl: './single-genre.component.html',
  styleUrls: ['./single-genre.component.css']
})
export class SingleGenreComponent implements OnInit {

  @Input() single_genre: IGenre;

  constructor() { }

  ngOnInit(): void {
  }

}
