import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {MovieService} from '../../../services/movie.service'
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers:[MovieService]
})
export class MovieSearchComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
  public searchedMovie:string;
  public moviesList=[];
  constructor(private movieService:MovieService) {}
  ngOnInit() {
  }
  searchMovie(){
    this.movieService.searchMovie(this.searchedMovie).subscribe(res=>{
    this.moviesList=res.results;
    this.success.emit({
      'moviesList':this.moviesList
    });
    //alert(this.moviesList);
    }, error=> console.log(error) 
    );
  }


}
