import { Component, OnInit } from '@angular/core';
import{ MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css'],
  providers: [MovieService],
})
export class FavListComponent implements OnInit {

  public moviesList=[];
  constructor(private movieService:MovieService) { }
  ngOnInit() {
    this.movieService.getFavMovies().subscribe(data=> this.moviesList=data,err=> console.log(err));
  }


}
