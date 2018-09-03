import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../Providers/locais.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.css']
})
export class GastronomiaComponent implements OnInit {
  restaurantes = [];
  constructor(public locais: LocaisService) { }

  ngOnInit() {
    this.locais.restaurante.forEach(restaurantes => {
      this.restaurantes.push(restaurantes);
    })
  }

}
