import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IMovies} from "../models/movies";

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',


}




@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url = 'https://developers.themoviedb.org/3'
  private api_key = environment.api;

  constructor(private httpClient: HttpClient) { }

  getLatestMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this._url}${endpoint.latest}`, {params: {api_key: this.api_key}})
  }

}
