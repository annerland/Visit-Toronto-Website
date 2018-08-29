import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
  array = [
    {
      "nome":"Scaramouche Restaurant",
      "preco":0,
      "quando":"as melhores data para o restaurante são de segunda a sexta nos feriados do final de semana",
      "endereco":"lalala",
      "classificacao":0,
      "coord":"43.6814153,-79.402439,17",
      "fotos":["img.jpg","img2.jpg"],
      "tempoMedioDeVisita":1
    }
  ];
  constructor() { }


}
