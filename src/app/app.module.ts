import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieComponent } from './components/movies/movie-list/movie/movie.component';
import { FavMovieComponent } from './components/fav-list/fav-movie/fav-movie.component';
import{MovieService} from '../app/services/movie.service';
const routes: Routes=[
    {path:'',redirectTo:'/movies', pathMatch:'full'},
    {path:'movies' ,component:MoviesComponent},
    {path:'favmovies' ,component:FavListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavListComponent,
    HeaderComponent,
    FooterComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FavMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
