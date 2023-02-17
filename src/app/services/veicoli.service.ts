import { Injectable } from "@angular/core";
import { RicercaComponent } from "../components/ricerca/ricerca.component";
import { Veicolo } from "../models/veicolo";

@Injectable()
export class VeicoliService {
    private veicoli: Veicolo[] = [
        new Veicolo(
            0,
            "Alfa Romeo",
            "Giulietta",
            "Berlina",
            80,
            [" Cambio automatico", " Tettuccio panoramico", " Navigatore satellitare"],
            "alfa-giuletta-berlina-80.png"
        ),
        new Veicolo(
            1,
            "Audi",
            "A5",
            "Berlina",
            110,
            ["Cambio automatico", "Sedili riscaldati", "Fari LED"],
            "audi-a5-berlina-110.png"
        ),
        new Veicolo(
            2,
            "Audi",
            "A7",
            "Berlina",
            170,
            [" Cambio automatico", " Carrozzeria in carbonio", " Navigatore satellitare"],
            "audi-a7-berlina-170.png"
        ),
        new Veicolo(
            3,
            "BMW",
            "5",
            "Berlina",
            120,
            [" Cambio automatico", " Navigatore satellitare", " Sistema Surround"],
            "bmw-5-berlina-120.png"
        ),
        new Veicolo(
            4,
            "BMW",
            "840i",
            "Cabrio",
            250,
            [" Carrozzeria in carbonio", " Sedili riscaldati", " Tettuccio panoramico"],
            "bmw-840i-cabrio-250.png"
        ),
        new Veicolo(
            5,
            "BMW",
            "x1",
            "Suv",
            100,
            [" Sedili riscaldati", " Sistema di accensione senza chiave", " Ruote in lega di dimensioni maggiori"],
            "bmw-x1-suv-100.png"
        ),
        new Veicolo(
            6,
            "BMW",
            "x3",
            "Suv",
            120,
            [" Sedili riscaldati", " Sistema Surround", " Ruote in lega di dimensioni maggiori"],
            "bmw-x3-suv-120.png"
        ),
        new Veicolo(
            7,
            "Fiat",
            "Qubo",
            "Pulmino",
            70,
            [" Navigatore satellitare", " Telecamera posteriore per il parcheggio"],
            "fiat-qubo-pulmino-70.png"
        ),
        new Veicolo(
            8,
            "Jeep",
            "Renegade",
            "Suv",
            80,
            [" Navigatore satellitare", " Telecamera posteriore per il parcheggio", " Ruote in lega di dimensioni maggiori"],
            "jeep-renegade-suv-80.png"
        ),
        new Veicolo(
            9,
            "Volkswagen",
            "Beetle",
            "Cabrio",
            130,
            [" Navigatore satellitare", " Ruote in lega di dimensioni maggiori", " Fari allo xeno"],
            "vw-beetle-cabrio-130.png"
        ),
        new Veicolo(
            10,
            "Volkswagen",
            "Caravelle",
            "Pulmino",
            120,
            [" Navigatore satellitare", " Controllo automatico della temperatura"],
            "vw-caravelle-pulmino-120.png"
        ),
        new Veicolo(
            11,
            "Volkswagen",
            "Golf",
            "Berlina",
            80,
            [" Navigatore satellitare", " Tettuccio panoramico", " Controllo automatico della temperatura"],
            "vw-golf-berlina-80.png"
        ),
        new Veicolo(
            12,
            "Volkswagen",
            "T-roc",
            "Cabrio",
            150,
            [" Navigatore satellitare", " Controllo automatico della temperatura", " Fari LED ", "Sedili riscaldati"],
            "vw-t-roc-cabrio-150.png"
        ),
        new Veicolo(
            13,
            "Volkswagen",
            "Touran",
            "Pulmino",
            125,
            [" Navigatore satellitare", " Sedili riscaldati", " Telecamera posteriore per il parcheggio", " Sistema di avviso di collisione frontale"],
            "vw-touran-pulmino-125.png"
        )

    ]
    elimina(id:number) : void{
        for (let i = 0; i < this.veicoli.length;i++)
            if (this.veicoli[i].id == id)
                this.veicoli.splice(i, 1);
    }
    getAll(): Veicolo[]{
        return this.veicoli;
    }
    getTipologie() : string[]{
        let tipologie : string[] = [];
        for(let i = 0; i < this.veicoli.length; i++)
            tipologie.unshift(this.veicoli[i].tipologia);
        return [...new Set(tipologie)];
    }
    cerca(value: string, n : number) {
        let t = this.getTipologie();
        let d = document.getElementById(n.toString());
        if(d) {d.style.backgroundColor = "rgba(255,255,255,0.726)";}
        for(let i = 0; i < t.length+1; i++){
            let d = document.getElementById(i.toString());
            if(i != n) if(d) {d.style.backgroundColor = "transparent";}
        }
        for(let v of this.veicoli){
            let t:any = document.getElementById(v.modello);
            t.style.display = 'block';                                                                                                                                                                                                                                                                                                                                                                                                                                 
        }
        if (value === "clear")
            return;
        for(let i = 0; i < this.veicoli.length; i++){
            if(this.veicoli[i].tipologia != value){
                let t:any = document.getElementById(this.veicoli[i].modello);
                t.style.display = "none";
            }
        }
    }
    getOne(id:number){
        return this.veicoli.find(v => v.id == id);
    }
    addCar(properties : any[]) : void{  
        let optional = properties[4].split(",");
        properties[4] = '';
        for(let i = 0; i < optional.length; i++){
            optional[i] = optional[i].charAt(0).toUpperCase() + optional[i].slice(1); 
            properties[4] += i != optional.length - 1 ? optional[i]+', ' : optional[i];
        } 
        console.log(properties[4]);
        this.veicoli.push(new Veicolo(
        this.veicoli.length+1,                                              //funzione per mettere ID
        properties[0].charAt(0).toUpperCase() + properties[0].slice(1),     // marca
        properties[1].charAt(0).toUpperCase() + properties[1].slice(1),     //modello
        properties[2].charAt(0).toUpperCase() + properties[2].slice(1),     //tipologia
        properties[3].charAt(0).toUpperCase() + properties[3].slice(1),     // prezzo giornaliero
        properties[4],                                                      // lista optional 
        "../CarAdd.png"))                                                   //immagine (null)
        window.scrollTo(0,document.body.scrollHeight);
    }
}











