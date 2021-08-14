import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IMovies} from "../models/movies";
import {IGenre} from "../models/genre";

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  genre = '/genre/movie/list'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url = 'https://api.themoviedb.org/3'
  private api_key = environment.api;

  constructor(private httpClient: HttpClient) { }

  getLatestMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.latest}`, {params: {api_key: this.api_key}});
  }

  // https://api.themoviedb.org/3/genre/movie/list?api_key=5b13226e9d05d711992657ee648bec45
  getAllGenres(): Observable<any> {
    return this.httpClient.get<any>(`${this._url}${endpoint.genre}`, {params: {api_key: this.api_key}});
  }

}
