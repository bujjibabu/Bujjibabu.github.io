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
	private cardsData : any;
	private cardId : any;
  private showOtherCard : any;
	private startGame : any;

  constructor(public _myService: CardService){};

  highCard() {
  	this.showOtherCard = true;
  	if(parseInt(this.cardsData[0].value) < parseInt(this.cardsData[1].value)) {
  		alert('You Win!')
    } else {
    	alert('Better Luck Next Time')
    }
    this.startGame = true;
  };

  lowCard() {
  	this.showOtherCard = true;
  	if(parseInt(this.cardsData[0].value) > parseInt(this.cardsData[1].value)) {
  		alert('You Win!')
    } else {
    	alert('Better Luck Next Time')
    }
    this.startGame = true;
  };

  //get card id
  getCardId () {
    this._myService.getCardId()
    .subscribe(
      data => {
      	console.log(data);
      	this.cardId = data;
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
      	for (var i = 0; i < data.length; i++) {
      		switch(data[i].value) {
				    case 'ACE':
				        data[i].value = 14;
				        break;
				    case 'KING':
				        data[i].value = 13;
				        break;
				    case 'QUEEN':
				        data[i].value = 12;
				        break;
				    case 'JACK':
				        data[i].value = 11;
				        break;
					}
      	}

      	if(data[0].value === data[1].value) {
      		this.getCards(this.cardId);
      	} else {
      		this.cardsData = data;
      		console.log('cards::',this.cardsData);
      	}
      },
      err => {
      console.log(err);
    });
  }

  tryAgain() {
    this.startGame = false;
    this.showOtherCard = false;
    this.getCardId();
  }
  /**
   * Init method
   */
  ngOnInit() {
    this.getCardId();
  }

}
