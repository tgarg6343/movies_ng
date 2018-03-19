import { Injectable } from '@angular/core';
import { Http ,Response,RequestOptions,Headers} from '@angular/http'; 
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {TMDB} from '../configs/tmdb-config';
import {App} from '../configs/app-config';

@Injectable()
export class MovieService {

  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  searchMovie(movieName:String){
    return this.http.get(TMDB.search_api+movieName)
    .map(data => data.json(),
    error=> console.log(error));  

  }

  addMovie(movie){
    return this.http.post(App.apiUrl+"movies",movie,{headers: this.headers}).
    map( data=>data.json(),
  err=> {console.log(err)}
);
  }

  getFavMovies(){
return this.http.get(App.apiUrl+"movies").
map(data => data.json(),
err=> console.log(err)
);
  }

  deleteFav(movie){
    return this.http.delete(App.apiUrl+"movies/"+movie.id,{headers: this.headers});
  }

}
