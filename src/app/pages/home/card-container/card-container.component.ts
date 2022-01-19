import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  constructor() { }

  imagen1: string = '../../../../assets/img/team.jpg';
  imagen2: string = '../../../../assets/img/finanza.jpg';
  imagen3: string = '../../../../assets/img/equip.jpg';

  titulo1: string = 'Busqueda de Mejoras';
  titulo2: string = 'Finanzas Elevadas';
  titulo3: string = 'Equipo y Calidad de Primera';

  ngOnInit(): void {
  }

}
