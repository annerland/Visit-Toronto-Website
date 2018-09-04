import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {
  eventos = [{
    "nome": "Canadian International Air Show",
    "descricao": "Esse evento faz parte da CNE (Canadian Nacional Exhibition), e acontece na beira do lago Ontario o Canadian International Air Show, um festival com aviões e caças que é simplesmente demais.",
    "foto": ["http://www.showlineairshows.com/wp-content/uploads/6.261-canadian-international-air-show-01.jpg"],
    "quando": "de 1 a 3 de setembro",
    "endereco": "210 Princes' Blvd, Toronto, ON M6K 3C3, Canadá",
    "infos": 'www.theex.com/main/entertainment/canadian-international-air-show/air-show'
  },
  {    
    "nome": "CaribbeanTales International Film Festival",
    "descricao": "Festival de cinema que celebra os talentos de cineastas estabelecidos e emergentes que praticam sua arte caribenha em todo o mundo. Exibido em Toronto para audiências entusiasmadas todo mês de setembro, o CTFF apresenta uma mistura multi-étnica de filmes dinâmicos que exibem uma diversidade de histórias e culturas.",
    "foto": ["http://www.juicystuff.ca/wp-content/uploads/2018/08/Caribbeantales.jpg"],
    "quando": "de 5 a 20 de setembro",
    "endereco": "The Royal Theatre (608 College St, Toronto, Canadá).",
    "infos": 'www.caribbeantalesfestival.com'
  },
  {
    "nome": "Toronto Ukrainian Festival",
    "descricao": " o maior festival de rua ucraniano na América do Norte, atraindo mais de 600.000 visitantes para a área conta com dois palcos com muita música, comida e entreterimento.",
    "foto": ["https://i0.wp.com/ucctoronto.ca/wp-content/uploads/2015/06/Cover50.jpg?resize=640%2C320&ssl=1"],
    "quando": "de 14 a 16 de setembro",
    "endereco": "Bloor West Village",
    "infos": 'www.ukrainianfestival.com/index.html'
  },
  {
    "nome": "JFL42",
    "descricao": "JFL é a sigla de Just for Laughs, um festival de comédia que conta com 42 eventos interativos e os principais nomes da comédia mundial estarão aqui para se apresentar e te fazer rir.",
    "foto": ["http://z1035.com/wp-content/uploads/2016/05/TicketMaster-ArtistPage-Logo-2426x1365-background-1.jpg"],
    "quando": "Entre os dias 20 e 29 de setembro de 2018",
    "endereco": "Toronto's Comedy Festival",
    "infos": 'www.jfl42.com'
  }
  ];

  hospedagem = [{
    "nome": "Victoria's Mansion",
    "descricao": "1,0 km até Museu Real de Ontário ROM",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "classificacao": "1",
    "telefone": "+1 416-921-4625",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/08/13/9e/0c/victoria-s-mansion-guest.jpg"],
    "email": "information@victoriamansion.org",
  },
  {
    "nome": "Victoria's Mansion",
    "descricao": "1,0 km até Museu Real de Ontário ROM",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "classificacao": "1",
    "telefone": "+1 416-921-4625",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/08/13/9e/0c/victoria-s-mansion-guest.jpg"],
    "email": "information@victoriamansion.org"
  },
  {
    "nome": "Victoria's Mansion",
    "descricao": "1,0 km até Museu Real de Ontário ROM",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "classificacao": "1",
    "telefone": "+1 416-921-4625",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/08/13/9e/0c/victoria-s-mansion-guest.jpg"],
    "email": "information@victoriamansion.org"
  },
  {
    "nome": "Victoria's Mansion",
    "descricao": "1,0 km até Museu Real de Ontário ROM",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "classificacao": "1",
    "telefone": "+1 416-921-4625",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/08/13/9e/0c/victoria-s-mansion-guest.jpg"],
    "email": "information@victoriamansion.org"
  },
  {
    "nome": "Victoria's Mansion",
    "descricao": "1,0 km até Museu Real de Ontário ROM",
    "endereco": "68 Gloucester Street, M4Y 1L5, Toronto, Canadá",
    "classificacao": "1",
    "telefone": "+1 416-921-4625",
    "foto": ["https://media-cdn.tripadvisor.com/media/photo-s/08/13/9e/0c/victoria-s-mansion-guest.jpg"],
    "email": "information@victoriamansion.org"
  }];
  constructor() { }
}
