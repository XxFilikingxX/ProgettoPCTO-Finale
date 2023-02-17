export class Veicolo {
    constructor(
        public id: number,
        public marca: string,
        public modello: string,
        public tipologia: string,
        public prezzoGiornaliero: number,
        public listaOptional: string[],
        public immagine?: string
    ) { }
}