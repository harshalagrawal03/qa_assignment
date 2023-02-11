import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

    movieData: any;

    nameFormControl = new FormControl();
    descriptionFormControl = new FormControl();
    releaseDateFormControl = new FormControl();

    constructor(public movieService: MovieService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: Params) => {
            this.movieService.getMovie(params.get('id')).subscribe(movie => {
                this.movieData = movie[0];
                this.nameFormControl.setValue(movie[0].fields.name);
                this.descriptionFormControl.setValue(movie[0].fields.description);
                this.releaseDateFormControl.setValue(movie[0].fields.release_date);
            });
        });
    }

    edit(): void {
        let data = {
            id: this.movieData.pk,
            name: this.nameFormControl.value,
            description: this.descriptionFormControl.value,
            release_date: this.releaseDateFormControl.value
        }
        this.movieService.editMovie(this.movieData.pk,data).subscribe( (data) => {
            this.movieData = data;
            alert('Movie updated Successfully');
        });
    }

    delete(): void {
        this.movieService.deleteMovie(this.movieData.pk).subscribe( (data) => {
            alert('Movie deleted Successfully');
            this.router.navigate(['/movie-list'])
        });
    }

    reset(): void {
        this.nameFormControl.setValue(this.movieData.fields.name);
        this.descriptionFormControl.setValue(this.movieData.fields.description);
        this.releaseDateFormControl.setValue(this.movieData.fields.release_date);
    }

}
