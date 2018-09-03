import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConhecaTorontoComponent } from './conheca-toronto/conheca-toronto.component';
import { ContatoComponent } from './contato/contato.component';
import { LocaisComponent } from './locais/locais.component';
import { ViagemComponent } from './viagem/viagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'conheca-toronto', component: ConhecaTorontoComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'locais', component: LocaisComponent}, 
{ path: 'viagem', component: ViagemComponent},
{ path: 'hospedagem', component: HospedagemComponent},
{ path: 'gastronomia', component: GastronomiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
