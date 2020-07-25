import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Movie } from 'src/app/models/movie.model';

import { SubscriptionLike } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  moviesList: Movie[];

  subscriptions: SubscriptionLike[];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.subscriptions = [
      this._moviesService.listMovies().subscribe((list) => {
        this.moviesList = list;
      })
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
