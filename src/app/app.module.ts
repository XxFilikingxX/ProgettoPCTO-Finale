import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaVeicoliComponent } from './components/lista-veicoli/lista-veicoli.component';
import { VeicoloComponent } from './components/veicolo/veicolo.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VeicoliService } from './services/veicoli.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaVeicoliComponent,
    VeicoloComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    RicercaComponent,
    ChiSiamoComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    VeicoliService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
