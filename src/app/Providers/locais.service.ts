import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
  CNTower = [
    {
      "nome":"CN tower",
      "descricao":"A CN Tower Tower é o cartão postal mais famoso de Toronto, é o maior ponto de referência entre os turistas,",
      "preco":"SkyPod: $15, EdgeWalk: C$225, Mais informações e reservas: (855) 553-3833",
      "quando":"Quando não há muito vento. De manhã, antes de 11h, e à noite, após as 19h, são os horários menos movimentados",
      "endereco":"301, Front Street West, Toronto, Ontario M5V 2T6",
      "classificacao":4.5,
      "latitude":"43.6441475",
      "longitude":"79.387009,15.25",
      "fotos":["img.jpg","img2.jpg"],
      "tempoMedioDeVisita":"á reservar, custo: $7"
    }
  ];
  constructor() { }
  getall(){
    return this.CNTower;
  }

}
