import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) {}

  public init(): void {
    // In case we need to fetch information the moment we instantiate a screen/component.
  }

  public getRandomMovie(): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiURL}/films/1`);
  }

  public listMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiURL}/films/`);
  }
}
