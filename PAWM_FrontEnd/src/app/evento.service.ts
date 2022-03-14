import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './evento';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url!: string;

  constructor(private client: HttpClient) { 
    this.url = 'http://localhost:8080/'
  }

  public getEventiDisponibili(): Observable<Evento[]> {
   return this.client.get<Evento[]>(this.url + 'eventi');
  }

  public getPostiRimanenti(eventi: Evento[]): Observable<number[]> {
    return this.client.post<number[]>(this.url + 'eventi', eventi);
  }

  public prenota(evento: Evento, utente: Utente, partecipanti: number) {
    return this.client.put<number[]>(this.url + 'eventi', {evento, utente, partecipanti});
  }
}