import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, shareReplay } from 'rxjs/internal/operators';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
    
    movieList$: Observable<any>;
    filteredMovieList$: Observable<any>;

    searchMovieFormControl = new FormControl('');

    constructor(private movieService: MovieService,
        private router: Router) {}

    ngOnInit(): void {
        this.movieList$ = this.movieService.getMovieList();
        this.filteredMovieList$ = combineLatest([
            this.movieList$,
            this.searchMovieFormControl.valueChanges.pipe(startWith(this.searchMovieFormControl.value))
        ]).pipe(
            map(([movieList, searchTerm]) => {
                return movieList.filter(movie => {
                    return (movie && movie.fields.name.indexOf(searchTerm) != -1);
                });
            }),
            startWith([]),
            shareReplay(),
        );
    }

}
