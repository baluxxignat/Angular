import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IMovies} from "../models/movies";
import {IGenre} from "../models/genre";
import {ISingleMovie} from "../models/single-movie";

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  genre = '/genre/movie/list',
  get_details = '/movie'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url = 'https://api.themoviedb.org/3'
  private api_key = environment.api;

  constructor(private httpClient: HttpClient) { }

  getTop_ratedMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.top_rated}`, {params: {api_key: this.api_key}} );
  }

  getMovieById(id: number): Observable<ISingleMovie> {
    return this.httpClient.get<ISingleMovie>(`${this._url}${endpoint.get_details}` + '/' + id, {params: {api_key: this.api_key}});
  }

  getLatestMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.latest}`, {params: {api_key: this.api_key}});
  }

  getNow_playingMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.now_playing}`, {params: {api_key: this.api_key}});
  }

  getPopularMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.popular}`, {params: {api_key: this.api_key}});
  }

  getUpcomingMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.upcoming}`, {params: {api_key: this.api_key}});
  }

  getTrendingMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.trending}`, {params: {api_key: this.api_key}});
  }

  // https://api.themoviedb.org/3/genre/movie/list?api_key=5b13226e9d05d711992657ee648bec45
  getAllGenres(): Observable<any> {
    return this.httpClient.get<any>(`${this._url}${endpoint.genre}`, {params: {api_key: this.api_key}});
  }

}
