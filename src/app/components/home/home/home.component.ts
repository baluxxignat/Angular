import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../../models/movies";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() latest_movie: IMovies;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTop_ratedMovies().subscribe(value => {
      this.latest_movie = value
      console.log(this.latest_movie);
    });
  }

}
