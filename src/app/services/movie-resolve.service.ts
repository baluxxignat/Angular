import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {MovieService} from "./movie.service";
import {IMovies} from "../models/movies";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieResolveService implements Resolve<any>{


  constructor(private movieService: MovieService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.movieService.getTop_ratedMovies();
  }


  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   return undefined;
  // }
  //
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   return this.movieService.getTop_ratedMovies();
  // }


}
