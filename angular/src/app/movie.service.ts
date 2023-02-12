import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class MovieService {

    movie_url = environment.production? "https://test.korangle.com:8800/movie" : "http://localhost:8000/movie";
    get_movie_list_url = "/get-movie-list";
    add_movie_url = "/add-movie";
    single_movie_url = "/movie";
    
    constructor(private http: HttpClient) { }

    getMovieList(username: number): Observable<any> {
        console.log(username);
        return this.http.get(this.movie_url+this.get_movie_list_url+"/"+username);
    }

    addMovie(username: number, data: any): Observable<any> {
        return this.http.post(this.movie_url+this.add_movie_url+"/"+username,data);
    }

    getMovie(movieId: number): Observable<any> {
        return this.http.get(this.movie_url+this.single_movie_url+"/"+movieId);
    }

    editMovie(movieId: number, data: any): Observable<any> {
        return this.http.put(this.movie_url+this.single_movie_url+"/"+movieId,data);
    }

    deleteMovie(movieId: number): Observable<any> {
        return this.http.delete(this.movie_url+this.single_movie_url+"/"+movieId);
    }

}
