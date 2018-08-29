import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConhecaTorontoComponent } from './conheca-toronto/conheca-toronto.component';
import { ContatoComponent } from './contato/contato.component';
import { LocaisComponent } from './locais/locais.component';
import { ViagemComponent } from './viagem/viagem.component';


const routes: Routes = [

{ path: 'conheca-toronto', component: ConhecaTorontoComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'locais', component: LocaisComponent}, 
{ path: 'viagem', component: ViagemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
