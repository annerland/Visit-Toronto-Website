import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  ponto = [
    {
      "nome": "CN tower",
      "descricao": "A CN Tower Tower é o cartão postal mais famoso de Toronto, é o maior ponto de referência entre os turistas,  O primeiro mirante 'Look Out level' está a 346 metros do chão. O segundo 'Sky Pod', a 447 metros.",
      "preco": "$$$",
      "quando": "Quando não há muito vento. De manhã, antes de 11h, e à noite, após as 19h, são os horários menos movimentados",
      "endereco": "301, Front Street West, Toronto, Ontario M5V 2T6.",
      "currentRate": 5,
      "tipo": "Local Histórico.",
      "latitude": "43.6441475",
      "longitude": "79.387009",
      "fotos": ["https://s1.citypass.net/img-7a9bcba/products/toronto/attractions/cntower/gallery/cntower-gallery-tower.jpg"],
      "tempoMedioDeVisita": "á reservar, custo: $7."
    },
    {
      "nome": "Ripley's aquarium",
      "descricao": "Localizado na base da Torre CN, no coração do distrito de entretenimento, o Aquário Ripley do Canadá reúne cerca de 16 mil habitantes bonitos e exóticos em Toronto. O maior aquário interno do país é a casa de águas-vivas deslumbrantes, lagostas seculares gigantes, tubarões, raias e todo tipo de peixes coloridos que você pode imaginar. Maravilhe-se com criaturas aquáticas de águas frescas e salgadas de todo o mundo, observe-os nadar sobre a sua cabeça no túnel de visualização de acrílico, e então fique perto e íntimo na galeria do tanque de tato – Touch Tank gallery.",
      "preco": "$$",
      "quando": "entre 9am - 10am e depois das 3pm.",
      "endereco": "288 Bremner Blvd, Toronto, ON M5V 3L9, Canadá.",
      "currentRate": 4,
      "tipo": "Passeio Cultural.",
      "latitude": "43.642403",
      "longitude": "79.385971",
      "fotos": ["http://www.thesetinystories.com/wp-content/uploads/2017/04/ripleys-aquarium-10-of-14.jpg"],
      "tempoMedioDeVisita": "2 horas."
    },
    {
      "nome": "Royal Ontaro Museum (ROM)",
      "descricao": "O Museu Real de Ontário é o maior museu do Canadá de culturas mundiais e história natural. Extensas galerias de arqueologia, arte e ciência natural com seis milhões de objetos aguardam a sua visita ao primeiro museu do país.",
      "preco": "$$",
      "quando": "entre 9am - 10am e depois das 3pm.",
      "endereco": "100 Queens Park, Toronto, ON M5S 2C6, Canadá.",
      "currentRate": 5,
      "tipo": "Museu.",
      "latitude": "43.6677097",
      "longitude": "79.3947771",
      "fotos": ["http://directory.entertainkidsonadime.com/wp-content/uploads/revslider-ontario-attractions-rom-1.jpg"],
      "tempoMedioDeVisita": "1 hora e 30 minutos."
    }
  ];

  restaurante = [{
    "nome": "360 CN Tower Restaurant",
    "descricao": "O restaurante 360 possui uma variedade de comidas, pra vários gostos, além de sua própria adega de vinhos. Além da comida, certamente o que chama atenção é o fato do restaurante ser giratório: a cada 72 minutos ele dá uma volta completa e, o melhor de tudo, você nem sente o movimento! Se você fizer uma reserva no Restaurante 360 e consumir algum prato principal você ganha a subida até o Look Out + Glass Floor.",
    "currentRate": 5,
    "preco":"$$$",
    "telefone": "+1 416-362-5411",
    "endereco": "290 Bremner Blvd, Toronto, ON M5V 3M9, Canadá",
    "horario":"Das 11am até as 22pm",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/10/45/89/24/360-restaurant-cn-tower.jpg"],
  },
  {
    "nome": "St. Lawrence Market",
    "descricao": "O mercado de Old York ocupa uma área cujo edifício começou a ser construído em 1831 e que, antes mesmo dessa data, já era tida como uma área de comércio de Toronto. No edifício sul, é onde se localiza o mercado. Ele reúne barraquinhas que vendem pães, massas frescas, carnes, peixes, frios, queijos, doces, frutas, verduras entre outros.Além da venda de ingredientes para montar seus pratos em casa, o mercado tem também um leque grande e variado de barraquinhas que funcionam como restaurantes.",
    "currentRate": 4,
    "telefone":"+1 416-392-7219",
    "horario": "das 8am até as 6pm, sábado das 5am até as 5pm e fechado aos domingos.",
    "endereco": "93 Front St E, Toronto, Canadá",
    "foto": ["https://1.bp.blogspot.com/-1If9IxcsWpM/WMWii9lxkcI/AAAAAAAAFD4/iSmlq_9d_kMgnM8LFPJSlVG0whd0pcNFwCEw/s1600/St-Lawrence-Market-Toronto.jpg"],
    "preco": "$$"
  },
  {
    "nome": "Canoe",
    "descricao": "O Canoe é um restaurante especializado em comida canadense localizado no 54º andar do edifício do TD Bank Tower, no distrito financeiro de Toronto.Alguns o consideram um dos melhores restaurantes da cidade não apenas pela comida, mas também pela vista panorâmica maravilhosa que oferece. Para desfrutar ao máximo de sua experiência no restaurante, a dica é fazer uma reserva e pedir por uma mesa na janela, o que deixará a refeição ainda mais especial. ",
    "currentRate": 3,
    "telefone":"+1 416-364-0054",
    "endereco": "66 Wellington St West, Toronto, Canadá",
    "horario":"11:45am – 2:30pm para almoço, 5pm – 22:30pm para jantar",
    "foto": ["https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/24317/show/canoe.jpg"],
    "preco": "$$$"
  },
  {
    "nome": "Chiado",
    "descricao": "O restaurante Chiado é considerado um dos melhores portugueses de Toronto. Com a decoração rústica e vintage faz com que a atmosfera do  Chiado lembre o aconchegante estilo de Portugal.",
    "currentRate": 4,
    "telefone":"+1 416-538-1910",
    "endereco": "864 College Street, Toronto, Canadá",
    "horario":"segundas a sextas 12:00 – 2:30pm para almoço, todos os dias 5pm – 10pm para jantar",
    "foto": ["http://4.bp.blogspot.com/-bWa7XEF9WRw/Tl1-Q8x5LLI/AAAAAAAABQI/2IRikJdnnyw/s1600/Chiado+%25283%2529.JPG"],
    "preco": "$$"
  },
  {
    "nome": "Scaramouche Restaurant",
    "descricao": "O Scaramouche é daqueles restaurantes chiques, um dos mais famosos de Toronto, de pratos pequenos e preços altos",
    "currentRate": 5,
    "telefone":"+1 416-961-8011",
    "endereco": "1 Benvenuto Pl, Toronto, Ontario M4V 2L1, Canadá",
    "horario":" Apenas jantar,  17:30 - 21:30",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/0c/c7/31/dc/scaramouche-restaurant.jpg"],
    "preco": "$$$"
  },
  {
    "nome": "GEORGE Restaurant",
    "descricao": "Culinária Francesa",
    "currentRate": 4,
    "telefone":"+1 647-496-8275",
    "endereco": "111 Queen St E, Toronto, M5C 1S2, Canadá",
    "horario":"Para almoço 12:00 – 14:00, para jantar 17:30 – 21:30",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/11/ff/5a/78/grand-georgian-room.jpg"],
    "preco": "$$$"
  }
  ];
  cityPass = [{
    "nome":"CityPASS",
    "descricao":"O Toronto CityPass é um combo de ingressos para visitar alguns lugares turísticos tradicionais em Toronto. Nele temos ingressos para 5 atrações: CN Tower, Casa Loma, Ripley’s Aquarium of Canada, Royal Ontario Museum, Toronto Zoo ou Ontario Science Center.Para um adulto o total dessas cinco atrações compradas individualmente seria $133, com o cityPASS sai aproximadamente $82 com taxas. Além disso, com o cityPASS você não precisa entrar na fila de compra do ingresso em cada uma das atrações.",
    "foto": ["./src/assets/torontoCityPass2.jpg"]
  }];
  constructor() { }

}
