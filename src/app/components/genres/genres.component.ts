import { Component, Input, OnInit } from '@angular/core';
import {IGenre} from "../../models/genre";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @Input()
  genre: IGenre[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllGenres().subscribe(value => {
      this.genre = value.genres;
      // console.log(this.genre);
    })
  }

}
