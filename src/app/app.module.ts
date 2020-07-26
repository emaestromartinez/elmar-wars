import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './screens/shared.module';
import { MoviesModule } from './screens/movies/movies.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, MoviesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
