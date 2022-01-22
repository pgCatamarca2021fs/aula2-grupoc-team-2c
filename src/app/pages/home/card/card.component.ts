import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card', //que es como llamarlo al componente en el html
  templateUrl: './card.component.html', //que es el HTML del componeente
  styleUrls: ['./card.component.css'] //los estilos del componente
})
export class CardComponent implements OnInit {

  constructor() {}

  @Input() title: string = ''; // el @Input recibe un valor del componente padre.
  @Input() imgUrl: string = '';
  @Input() example: any = '';


  ngOnInit(): void {
  }

}


