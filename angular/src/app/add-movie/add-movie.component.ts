import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MovieService]
})
export class AddMovieComponent implements OnInit {

    nameFormControl = new FormControl();
    descriptionFormControl = new FormControl();
    releaseDateFormControl = new FormControl();

    constructor(public movieService: MovieService) { }

    ngOnInit() {
        
    }

    addMovie(): void {
        let data = {
            name: this.nameFormControl.value,
            description: this.descriptionFormControl.value,
            release_date: this.releaseDateFormControl.value
        }
        this.movieService.addMovie(data).subscribe( (data) => {
            console.log(data);
            alert('Movie added Successfully');
        });
    }

    reset(): void {
        this.nameFormControl.setValue(null);
        this.descriptionFormControl.setValue(null);
        this.releaseDateFormControl.setValue(null);
    }

}
