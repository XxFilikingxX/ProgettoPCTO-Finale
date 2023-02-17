import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { HomeComponent } from './components/home/home.component';
import { ListaVeicoliComponent } from './components/lista-veicoli/lista-veicoli.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'veicoli', component: ListaVeicoliComponent},
    {path: 'ricerca', component: RicercaComponent},
    {path: 'chisiamo', component: ChiSiamoComponent},
    {path: 'veicolo/:id', component: DettaglioComponent},
    {path: '**', component: NotFoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}