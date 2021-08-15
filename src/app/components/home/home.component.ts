import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../models/movies";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  totalLength: number;
  page: number = 1;
  handlePageChange(event: any) {
    this.page = event;
    console.log(this.page);
  }
  

  @Input()
  top_movie: any;     //не смог устранить ошибку несоответствия типа данных объекта data
                      // и интерфейса IMovies (после имплиментации resolva)

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {
    this.activatedRoute.data.subscribe(value => {
      this.top_movie = value.xxx.results;
      this.totalLength = value.xxx.total_pages


      console.log(this.top_movie);
    })
  }

  ngOnInit(): void {
  }

  openMovieDetails(id: number): void {
    this.router.navigate(['details', id]);
  }



}
