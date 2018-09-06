import { Injectable } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class ViagemService {
  eventos = [{
    "nome": "Canadian International Air Show",
    "descricao": "Esse evento faz parte da CNE (Canadian Nacional Exhibition), e acontece na beira do lago Ontario o Canadian International Air Show, um festival com aviões e caças que é simplesmente demais.",
    "foto": ["http://www.showlineairshows.com/wp-content/uploads/6.261-canadian-international-air-show-01.jpg"],
    "tipo":"Festival temático",
    "quando": "de 1 a 3 de setembro",
    "endereco": "210 Princes' Blvd, Toronto, ON M6K 3C3, Canadá",
    "infos": 'www.theex.com/main/entertainment/canadian-international-air-show/air-show'
  },
  {    
    "nome": "CaribbeanTales International Film Festival",
    "descricao": "Festival de cinema que celebra os talentos de cineastas estabelecidos e emergentes que praticam sua arte caribenha em todo o mundo. Exibido em Toronto para audiências entusiasmadas todo mês de setembro, o CTFF apresenta uma mistura multi-étnica de filmes dinâmicos que exibem uma diversidade de histórias e culturas.",
    "foto": ["http://www.juicystuff.ca/wp-content/uploads/2018/08/Caribbeantales.jpg"],
    "tipo":"Cinema",
    "quando": "de 5 a 20 de setembro",
    "endereco": "The Royal Theatre (608 College St, Toronto, Canadá).",
    "infos": 'www.caribbeantalesfestival.com'
  },
  {
    "nome": "Toronto Ukrainian Festival",
    "descricao": " o maior festival de rua ucraniano na América do Norte, atraindo mais de 600.000 visitantes para a área conta com dois palcos com muita música, comida e entreterimento.",
    "tipo":"Festival temático",
    "foto": ["https://i0.wp.com/ucctoronto.ca/wp-content/uploads/2015/06/Cover50.jpg?resize=640%2C320&ssl=1"],
    "quando": "de 14 a 16 de setembro",
    "endereco": "Bloor West Village",
    "infos": 'www.ukrainianfestival.com/index.html'
  },
  {
    "nome": "JFL42",
    "descricao": "JFL é a sigla de Just for Laughs, um festival de comédia que conta com 42 eventos interativos e os principais nomes da comédia mundial estarão aqui para se apresentar e te fazer rir.",
    "foto": ["http://z1035.com/wp-content/uploads/2016/05/TicketMaster-ArtistPage-Logo-2426x1365-background-1.jpg"],
    "tipo":"Humor",
    "quando": "Entre os dias 20 e 29 de setembro de 2018",
    "endereco": "Toronto's Comedy Festival",
    "infos": 'www.jfl42.com'
  }
  ];

  hospedagem = [{
    "nome": "Victoria's Mansion",
    "descricao": "1,0 km até Museu Real de Ontário ROM",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "currentRate": 1,
    "preco":"$",
    "tipo":"Hotel",
    "telefone": "+1 416-921-4625",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/08/13/9e/0c/victoria-s-mansion-guest.jpg"],
    "email": "information@victoriamansion.org",
  },
  {
    "nome": "The Parkdale Hostellerie",
    "descricao": " 4,1 km até Centro da cidade",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "tipo":"Hotel",
    "currentRate": 3,
    "preco":"$",
    "telefone": "+1 416-855-4606",
    "foto": ["https://exp.cdn-hotels.com/hotels/19000000/18340000/18335600/18335527/badbd491_z.jpg"],
    "email": "N/A"
  },
  {
    "nome": "Hotel 89 Yorkville",
    "descricao": "0,5 km até Museu Real de Ontário ROM",
    "endereco": "89 Avenue Rd, Toronto, ON M5R 2G3, Canadá",
    "tipo":"Hotel",
    "currentRate": 2,
    "preco":"$$",
    "telefone": "+1 416-964-1220",
    "foto": ["https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/67/21/67215944.jpeg"],
    "email": "N/A"
  },
  {
    "nome": "The Hazelton Hotel",
    "descricao": "0,3 km até Museu Real de Ontário ROM",
    "endereco": "118 Yorkville Ave, Toronto, ON M5R 1C4, Canadá",
    "tipo":"Hotel",
    "currentRate": 5,
    "preco":"$$$",
    "telefone": "+1 416-963-6300",
    "foto": ["https://img.grouponcdn.com/getaways/vg5hraRGrJqhjJzi1s9x3U/1688828_70_w-2000x1333/v1/t550x332.jpg"],
    "email": "reservations@thehazeltonhotel.com"
  },
  {
    "nome": "Life Suites Luxury Downtown Condos",
    "descricao": "1,0 km até Billy Bishop Toronto City Airport",
    "endereco": "560 Front Street West",
    "tipo":"Pousada",
    "currentRate": 3,
    "preco":"$$",
    "telefone": "N/A",
    "foto": ["https://r-ec.bstatic.com/images/hotel/max1024x768/495/49526560.jpg"],
    "email": "N/A"
  },
  {
    "nome": "Taigh Ice",
    "descricao": "5,0 km até Centro da cidade",
    "endereco": " 259 Wellesley St E, Toronto, ON M4X 1G8, Canadá",
    "tipo":"Pousada",
    "currentRate": 3,
    "preco":"$$",
    "telefone": "+1 416-876-5667 ",
    "foto": ["https://s-ec.bstatic.com/images/hotel/max1024x768/106/106813464.jpg"],
    "email": "N/A"
  },
  {
    "nome": "The Ritz Carlton Toronto",
    "descricao": "1,7 km até Billy Bishop Toronto City Airport",
    "endereco": "181 Wellington Street West, M5V 3G7, Toronto, Canadá",
    "tipo":"Hotel",
    "currentRate": 5,
    "preco":"$$$",
    "telefone": "+1 416-585-2500",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/0a/03/2c/fd/the-ritz-carlton-istanbul.jpg"],
    "email": "toronto.concierge@ritzcarlton.com"
  },
  {
    "nome": "Toronto Marriott City Centre Hotel",
    "descricao": "1,2 km até Billy Bishop Toronto City Airport",
    "endereco": "One Blue Jays Way, M5V 1J4, Toronto, Canadá",
    "tipo":"Hotel",
    "currentRate": 4,
    "preco":"$$",
    "telefone": "+1 416-341-7100",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/13/c7/82/6b/exterior.jpg"],
    "email": "N/A"
  },
  {
    "nome": "Chelsea Hotel Toronto",
    "descricao": "1,4 km até Museu Real de Ontário ROM",
    "endereco": "33 Gerrard Street West, M5G 1Z4, Toronto, Canadá",
    "tipo":"Hotel",
    "currentRate": 4,
    "preco":"$$",
    "telefone": "+1 416-595-1975",
    "foto": ["https://images.oyster.com/photos/entrance--v3351288-720.jpg"],
    "email": "cstor.info@chelseatoronto.com"
  }
];
  constructor() { }
}
