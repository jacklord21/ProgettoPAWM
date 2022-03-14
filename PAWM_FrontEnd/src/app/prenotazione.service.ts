import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './evento';
import { Prenotazione } from './prenotazione';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {
  private url!: string;

  constructor(private client: HttpClient) { 
    this.url = 'http://localhost:8080/'
  }

  public getEventiPrenotati(utente: Utente){
    return this.client.get<Evento[]>(this.url + 'listaEventiPrenotati/' + utente.id);
  }

  
  public getNumPrenotazioni(evento: Evento, utente: Utente){
    return this.client.get<Prenotazione>(this.url + 'getPrenotazione/' + evento.id + '/' + utente.id);
  }

  public cancellaPrenotazione(prenotazione: Prenotazione){
    this.client.put(this.url + 'cancellaPrenotazione', prenotazione.id).subscribe();
  }
}
