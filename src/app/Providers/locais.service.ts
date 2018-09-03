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
      "endereco":"301, Front Street West, Toronto, Ontario M5V 2T6.",
      "classificacao":4.5,
      "tipo": "Local Histórico.",
      "latitude":"43.6441475",
      "longitude":"79.387009",
      "fotos":["./assets/cntower1.jpg"],
      "tempoMedioDeVisita":"á reservar, custo: $7."
    },
    {
      "nome":"Ripley's aquarium",
      "descricao":"Localizado na base da Torre CN, no coração do distrito de entretenimento, o Aquário Ripley do Canadá reúne cerca de 16 mil habitantes bonitos e exóticos em Toronto. O maior aquário interno do país é a casa de águas-vivas deslumbrantes, lagostas seculares gigantes, tubarões, raias e todo tipo de peixes coloridos que você pode imaginar. Maravilhe-se com criaturas aquáticas de águas frescas e salgadas de todo o mundo, observe-os nadar sobre a sua cabeça no túnel de visualização de acrílico, e então fique perto e íntimo na galeria do tanque de tato – Touch Tank gallery.",
      "preco":"$26,98",
      "quando":"entre 9am - 10am e depois das 3pm.",
      "endereco":"288 Bremner Blvd, Toronto, ON M5V 3L9, Canadá.",
      "classificacao":4.5,
      "tipo": "Passeio Cultural.",
      "latitude":"43.642403",
      "longitude":"79.385971",
      "fotos":["http://www.thesetinystories.com/wp-content/uploads/2017/04/ripleys-aquarium-10-of-14.jpg"],
      "tempoMedioDeVisita":"2 horas."
    },
    {
      "nome":"Royal Ontaro Museum (ROM)",
      "descricao":"O Museu Real de Ontário é o maior museu do Canadá de culturas mundiais e história natural. Extensas galerias de arqueologia, arte e ciência natural com seis milhões de objetos aguardam a sua visita ao primeiro museu do país.",
      "preco":"$16 nas sextas eles oferecem horário de desconto, então a entrada fica por $10",
      "quando":"entre 9am - 10am e depois das 3pm.",
      "endereco":"100 Queens Park, Toronto, ON M5S 2C6, Canadá.",
      "classificacao":4.5,
      "tipo": "Museu.",
      "latitude":"43.6677097",
      "longitude":"79.3947771",
      "fotos":["http://directory.entertainkidsonadime.com/wp-content/uploads/revslider-ontario-attractions-rom-1.jpg"],
      "tempoMedioDeVisita":"1 hora e 30 minutos."
    }
  ];

  restaurante = [{
      "nome":"360 CN Tower Restaurant",

      "descricao":"O restaurante 360 possui uma variedade de comidas, pra vários gostos, além de sua própria adega de vinhos. Além da comida, certamente o que chama atenção é o fato do restaurante ser giratório: a cada 72 minutos ele dá uma volta completa e, o melhor de tudo, você nem sente o movimento! Se você fizer uma reserva no Restaurante 360 e consumir algum prato principal você ganha a subida até o Look Out + Glass Floor.",     
      "classificacao":4.5,
      "endereco":"290 Bremner Blvd, Toronto, ON M5V 3M9, Canadá",
      "foto": ["https://i.ytimg.com/vi/aU4T-fnHE1A/maxresdefault.jpg"],
      "preco":"O menu com preços fixos varia entre $55 e $65"
      }];

  constructor() { }

}
