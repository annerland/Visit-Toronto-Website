import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
 
  ponto = [
    {
      "nome":"CN tower",
      "descricao":"A CN Tower Tower é o cartão postal mais famoso de Toronto, é o maior ponto de referência entre os turistas,  O primeiro mirante 'Look Out level' está a 346 metros do chão. O segundo 'Sky Pod', a 447 metros.",
      "preco":"SkyPod: $15, EdgeWalk: C$225, Mais informações e reservas: (855) 553-3833",
      "quando":"Quando não há muito vento. De manhã, antes de 11h, e à noite, após as 19h, são os horários menos movimentados",
      "endereco":"301, Front Street West, Toronto, Ontario M5V 2T6",
      "classificacao":4.5,
      "latitude":"43.6441475",
      "longitude":"79.387009",
      "fotos":["./assets/cntower1.jpg"],
      "tempoMedioDeVisita":"á reservar, custo: $7"
    },
    {
      "nome":"Ripley's aquarium",
      "descricao":"Localizado na base da Torre CN, no coração do distrito de entretenimento, o Aquário Ripley do Canadá reúne cerca de 16 mil habitantes bonitos e exóticos em Toronto. O maior aquário interno do país é a casa de águas-vivas deslumbrantes, lagostas seculares gigantes, tubarões, raias e todo tipo de peixes coloridos que você pode imaginar. Maravilhe-se com criaturas aquáticas de águas frescas e salgadas de todo o mundo, observe-os nadar sobre a sua cabeça no túnel de visualização de acrílico, e então fique perto e íntimo na galeria do tanque de tato – Touch Tank gallery.",
      "preco":"$26,98",
      "quando":"entre 9am-10am e depois das 3pm.",
      "endereco":"288 Bremner Blvd, Toronto, ON M5V 3L9, Canadá",
      "classificacao":4.5,
      "latitude":"43.642403",
      "longitude":"79.385971",
      "fotos":["http://www.thesetinystories.com/wp-content/uploads/2017/04/ripleys-aquarium-10-of-14.jpg"],
      "tempoMedioDeVisita":"2 horas"
    }
  ];
  constructor() { }

}
