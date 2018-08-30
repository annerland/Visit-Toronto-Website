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
  pontos = [
    {
      "nome": "CN tower",
      "descricao": "A CN Tower Tower é o cartão postal mais famoso de Toronto, é o maior ponto de referência entre os turistas, pois é possível enxergá-la de praticamente todos os lugares do centro da cidade. Não é à toa que a CN Tower em Toronto é a atração turística mais requisitada, recebendo aproximadamente 2 milhões de visitantes por ano. O gigantesco observatório permite aos seus visitantes uma visão incrível dos arredores. Os arredores que, na verdade, podem atingir um raio de até 160 quilômetros em dias com boa visibilidade. Com 553 metros de altura, já foi considerada uma das torres mais altas do mundo e conta com diferentes níveis de observação. Em um dos seus seis elevadores de vidro de alta velocidade, é possível subir no LookOut, que fica a 346 metros, em meros 58 segundos. Em outro nível, a 342 metros de altura, está o mundialmente famoso Piso de Vidro, onde os turista se divertem tirando fotos sentados no chão, além de capturar imagens incríveis da cidade na varanda externa, situada no mesmo patamar.",
      "atracoes": "EdgeWalk: Para os mais aventureiros, a torre propõe uma atividade repleta de adrenalina com o EdgeWalk, que é uma caminhada em sua área externa sem usar as mãos.",
      "preco": "SkyPod: $15, EdgeWalk: C$225. Mais informações e reservas: (855) 553-3833.",
      "quando": "De manhã, antes de 11h, e à noite, após as 19h, são os horários menos movimentados.",
      "endereco": "301, Front Street West, Toronto, Ontario M5V 2T6.",
      "classificacao": 4.5,
      "latitude": 43.6441475,
      "longitude": 79.387009,
      "fotos": ["http://pictures.4ever.eu/data/download/buildings/cities/cn-tower,-toronto,-evening-city,-sea-239169.jpg?no-logo"],
      "tempoMedioDeVisita": "á reservar, custo: $7."
    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    },
    {
      "nome": "adssa",
      "descricao": "asdsd",
      "preco": "asdsa",
      "quando": "sad",
      "endereco": "sa",
      "classificacao": "ds",
      "latitude": "sad",
      "longitude": "asd",
      "fotos": [],
      "tempoMedioDeVisita": "",

    }
  ];

  constructor(public Locais: LocaisService) { }

  ngOnInit(){
  }

}
