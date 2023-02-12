import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard/:username',
        component: DashboardComponent,
        children : [
            { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
            { path: 'movie-list', component: MovieListComponent },
            { path: 'add-movie', component: AddMovieComponent },
            { path: 'movie/:movieId', component: MovieComponent },
        ]
    },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }