import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  private favoritemovieData : any;
  private favoritemoviecasts : any;
  constructor(public _myService: MoviesService){};

  //get card id
  getFavorateMovie () {
    this._myService.getFavorateMovie()
    .subscribe(
      data => {
      	console.log('favoritemovieData::', data);
      	this.favoritemovieData = data;
      },
      err => {
      console.log(err);
    });
  }

  getFavorateMovieCasts () {
    this._myService.getFavorateMovieCasts()
    .subscribe(
      data => {
      	console.log('favoritemoviecasts:', data);
      	this.favoritemoviecasts = data;
      },
      err => {
      console.log(err);
    });
  }

  ngOnInit() {
  	this.getFavorateMovie();
  	this.getFavorateMovieCasts();
  }

}
