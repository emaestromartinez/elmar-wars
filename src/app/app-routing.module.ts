import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/screens/dashboard/dashboard.component';
import { CharactersComponent } from 'src/app/screens/characters/characters.component';
import { MoviesComponent } from 'src/app/screens/movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'movies', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
