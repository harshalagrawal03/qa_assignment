import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

    movie_url = "http://localhost:8000/movie";
    get_movie_list_url = "/get-movie-list";
    add_movie_url = "/add-movie";
    
    constructor(private http: HttpClient) { }

    getMovieList(): Observable<any> {
        return this.http.get(this.movie_url+this.get_movie_list_url);
    }

    addMovie(data: any): Observable<any> {
        let result = this.http.post(this.movie_url+this.add_movie_url,data);
        console.log(result);
        return result;
    }

}