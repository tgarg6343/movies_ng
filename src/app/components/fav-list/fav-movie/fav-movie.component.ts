import { Component, OnInit, Input } from '@angular/core';
import { MovieService} from './../../../services/movie.service';
import{TMDB} from '../../../configs/tmdb-config'
@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css'],
  providers: [MovieService],
})
export class FavMovieComponent implements OnInit {

  @Input() movie;
  baseUrl;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.baseUrl=TMDB.baseUrl;
  }

  deleteFav(moviett){
    this.movieService.deleteFav(this.movie).subscribe((res)=>{},
  (err)=>{console.log(err)});
   }

}
