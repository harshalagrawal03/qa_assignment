import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MovieService]
})
export class AddMovieComponent implements OnInit {

    username: number;
    nameFormControl = new FormControl();
    descriptionFormControl = new FormControl();
    releaseDateFormControl = new FormControl();

    constructor(public movieService: MovieService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.parent.paramMap.subscribe((params: Params) => {
            this.username = params.get('username');
        });
    }

    addMovie(): void {
        let data = {
            name: this.nameFormControl.value,
            description: this.descriptionFormControl.value,
            release_date: this.releaseDateFormControl.value
        }
        this.movieService.addMovie(this.username, data).subscribe( (data) => {
            alert('Movie added Successfully');
        });
    }

    reset(): void {
        this.nameFormControl.setValue(null);
        this.descriptionFormControl.setValue(null);
        this.releaseDateFormControl.setValue(null);
    }

}
