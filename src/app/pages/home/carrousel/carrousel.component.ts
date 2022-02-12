import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  constructor() { }

  
  imgUrl1: string = '../../../../assets/img/Ethereum.png';
  imgUrl2: string = '../../../../assets/img/Bitcoin-Logo.png';
  imgUrl3: string = '../../../../assets/img/lunar.jpg';

  title1: string = 'Ethereum';
  title2: string = 'Bitcoin';
  title3: string = 'Lunar Coin';

  ngOnInit(): void {
  }

}

