import { Component } from '@angular/core';
import { MovieService }  from '../../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

  popularList:Array<Object>;
  theatersList:Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService: MovieService) {
     this._movieService.getPopular().subscribe(res => {
       console.log(res.results);
       this.popularList = res.results;
     });


    this._movieService.getInTheaters().subscribe(res => {
      console.log(res.results);
      this.theatersList = res.results;
    });


  }

  searchMovies() {
    console.log(this.searchStr);
    this._movieService.searchMovie(this.searchStr).subscribe(res => {
      console.log(res.results);
      this.searchRes = res.results;
    });
  }
}
