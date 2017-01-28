import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class MoviesService {
 constructor(private http:Http ) { };

 getFavorateMovie(): Observable<any> {
    let url = 'https://api.themoviedb.org/3/movie/277834?api_key=02929bf01959246897a6aa6d1ebdfb5e&language=en-US';
    return this.http
	  .get(url)
	  .map((r: Response) => {
	    return r.json();
	  });
  };

  getFavorateMovieCasts(): Observable<any> {
    let url = 'https://api.themoviedb.org/3/movie/277834/credits?api_key=02929bf01959246897a6aa6d1ebdfb5e';
    return this.http
	  .get(url)
	  .map((r: Response) => {
	    return r.json();
	  });
  };

}
