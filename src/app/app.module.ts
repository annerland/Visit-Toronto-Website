import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocaisComponent } from './locais/locais.component';
import { ViagemComponent } from './viagem/viagem.component';
import { ConhecaTorontoComponent } from './conheca-toronto/conheca-toronto.component';
import { ContatoComponent } from './contato/contato.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LocaisComponent,
    ViagemComponent,
    ConhecaTorontoComponent,
    ContatoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
