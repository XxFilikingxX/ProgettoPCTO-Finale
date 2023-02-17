export class Veicolo{
    constructor(
        public marca:string,
        public modello:string,
        public tipologia:string,
        public prezzoGiornaliero:number,
        public listaOptional:string[],
        public immagine:string
        ){}
}