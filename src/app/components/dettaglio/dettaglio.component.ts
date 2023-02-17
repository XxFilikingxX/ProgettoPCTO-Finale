import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoliService } from 'src/app/services/veicoli.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {
  veicoli?: Veicolo;
  constructor(private route:ActivatedRoute, private service:VeicoliService) {
    let id = +this.route.snapshot.params['id'];
    this.veicoli = this.service.getOne(id);
  }
}
