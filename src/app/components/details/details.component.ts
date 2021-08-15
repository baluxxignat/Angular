import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../models/movies";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  single_movie: IMovies;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.movieService.getMovieById(id).subscribe(value => {
        this.single_movie = value;
        console.log(this.single_movie);
      })
    } )
  }



  ngOnInit(): void {}


}
