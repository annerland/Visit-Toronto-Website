import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../Providers/locais.service';
import { AgmCoreModule } from '@agm/core';




@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {
  lat: number = 43.6425662;
  lng: number = 79.3870568;
  ponto = [];
  restaurantes = [];
  citypass = [];
  constructor(public Locais: LocaisService) { }

  ngOnInit(){

    this.Locais.cityPass.forEach(citypass => {
      this.citypass.push(citypass);
    })

    console.log(this.Locais.ponto);
    this.Locais.ponto.forEach(ponto => {
        this.ponto.push(ponto);
        console.log('ponto');
        console.log(ponto);
    });
    
    console.log(this.Locais.restaurante);
    this.Locais.restaurante.forEach(restaurantes => {
      this.restaurantes.push(restaurantes);
      console.log('restaurantes:');
    });


  }

}
