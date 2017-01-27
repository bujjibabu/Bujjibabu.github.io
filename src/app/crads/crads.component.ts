import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {CardService} from '../services/card.service';

@Component({
  selector: 'app-crads',
  templateUrl: './crads.component.html',
  styleUrls: ['./crads.component.scss']
})
export class CradsComponent implements OnInit {

  constructor(public _myService: CardService){};

  //get card id
  getCardId () {
    this._myService.getCardId()
    .subscribe(
      data => {
      	console.log(data);
      	this.getCards(data);
      },
      err => {
      console.log(err);
    });
  }

  // get cards 
  getCards (id) {
    this._myService.getCards(id)
    .subscribe(
      data => {
      	console.log(data);
      	let cards = data;
      },
      err => {
      console.log(err);
    });
  }

  /**
   * Init method
   */
  ngOnInit() {
    this.getCardId();
  }

}
