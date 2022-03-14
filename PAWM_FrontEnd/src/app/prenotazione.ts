import { Data } from "@angular/router";
import { Evento } from "./evento";

export interface Prenotazione {
    id: number,
    evento: Evento,
    numPartecipanti: number,
    data: Data,
    prezzoTot: number,
}
