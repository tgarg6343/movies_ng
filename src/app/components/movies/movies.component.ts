import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies=[];
  constructor() { }

  ngOnInit() {
  }
  setMovieList(event){
    this.movies=event.moviesList;
    //alert(this.movies);
  }

}
