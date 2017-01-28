import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class CardService {
 constructor(private http:Http ) { };

 getCardId(): Observable<any> {
    let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    return this.http
	  .get(url)
	  .map((r: Response) => {
	    return r.json().deck_id;
	  });
  };

  getCards(id): Observable<any> {
    let url = 'https://deckofcardsapi.com/api/deck/'+ id +'/draw/?count=2';
    return this.http
	  .get(url)
	  .map((r: Response) => {
	    return r.json().cards;
	  });
  };

}