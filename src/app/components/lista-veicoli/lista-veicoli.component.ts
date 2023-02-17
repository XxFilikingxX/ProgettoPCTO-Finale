import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoliService } from 'src/app/services/veicoli.service';

@Component({
  selector: 'app-lista-veicoli',
  templateUrl: './lista-veicoli.component.html',
  styleUrls: ['./lista-veicoli.component.css']
})
export class ListaVeicoliComponent {
  veicoli:Veicolo[];
  properties:any[] = [4];

  constructor(private service:VeicoliService)
  {
    this.veicoli = service.getAll();
  }
  elimina(id:number) : void
  {
    this.service.elimina(id);
  }
  addCar(){
    let tipologie = this.service.getTipologie();
    for(let i = 0; i < 5; i++){
      this.properties[i] = (<HTMLInputElement>document.getElementById("prop"+i)).value;
    }
    for(let i = 0; i < tipologie.length; i++){
        if(this.properties[2].toLowerCase() == tipologie[i].toLowerCase())
          return this.service.addCar(this.properties); 
    }
      alert("Tipologia sconosciuto");
  }
}
