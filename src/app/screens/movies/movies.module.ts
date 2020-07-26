import { NgModule } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [],
  exports: [MoviesComponent, MovieCardComponent],
  declarations: [MoviesComponent, MovieCardComponent],
  providers: []
})
export class MoviesModule {}
