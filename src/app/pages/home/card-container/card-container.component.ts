import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  constructor() { }

  imgUrl1: string = '../../../../assets/img/team.jpg';
  imgUrl2: string = '../../../../assets/img/finanza.jpg';
  imgUrl3: string = '../../../../assets/img/equip.jpg';

  title1: string = 'Busqueda de Mejoras';
  title2: string = 'Finanzas Elevadas';
  title3: string = 'Equipo y Calidad de Primera';

  ngOnInit(): void {
  }

}
