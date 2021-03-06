import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies/movies.component';

import { SharedModule } from '../../screens/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [MoviesComponent, MovieCardComponent],
  declarations: [MoviesComponent, MovieCardComponent],
  providers: []
})
export class MoviesModule {}
