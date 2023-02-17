import { Component } from '@angular/core';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { Veicolo } from 'src/app/models/veicolo';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  value : string[] = ["Berlina","Suv","Pulmino","Cabrio","clear"];
  veicoli:Veicolo[];
  l: boolean = true;

  constructor(private service:VeicoliService){
    this.veicoli = this.service.getAll();
  }
  cerca(n:number)
  {  
    this.service.cerca(this.value[n], n);
  }
}
