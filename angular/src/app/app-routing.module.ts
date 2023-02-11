import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
    { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
    { path: 'movie-list', component: MovieListComponent },
    { path: 'add-movie', component: AddMovieComponent },
    { path: 'movie/:id', component: MovieComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }