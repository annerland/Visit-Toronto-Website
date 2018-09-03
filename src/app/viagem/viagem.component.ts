import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../Providers/viagem.service';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {
  eventos = []
  constructor(public via: ViagemService) { }

  ngOnInit() {
    console.log(this.via.eventos);
    this.via.eventos.forEach(eventos => {
      this.eventos.push(eventos);
    });
  }

}
