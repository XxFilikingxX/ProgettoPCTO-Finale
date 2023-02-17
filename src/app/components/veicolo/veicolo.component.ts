import { Component, Input } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class VeicoloComponent {
  @Input() veicolo?: Veicolo;
  veicoli: Veicolo[];
  constructor(private service: VeicoliService, private router: Router) {
      this.veicoli = service.getAll();
  }
  dettaglio(){
      this.router.navigate(['veicolo',this.veicolo?.id]);
  }
}