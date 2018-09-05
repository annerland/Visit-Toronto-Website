import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../Providers/viagem.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hospedagem',
  templateUrl: './hospedagem.component.html',
  styleUrls: ['./hospedagem.component.css']
})
export class HospedagemComponent implements OnInit {
  hospedagens = [];
  currentRate;
  constructor(public viagem: ViagemService, config: NgbRatingConfig) {
    config.max = 5;

   }

  ngOnInit() {
    console.log(this.viagem.hospedagem);
    this.viagem.hospedagem.forEach(hospedagens => {
      this.hospedagens.push(hospedagens);
    })
  }

}
