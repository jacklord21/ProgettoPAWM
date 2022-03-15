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

  public prenota(email: string, evento: Evento, partecipanti: number): Observable<boolean> {
    //   alert('Prenota raggiunto.\nEmail: ' + email + '\nEvento: ' + evento.nome + '\nPartecipanti: ' + partecipanti)
       return this.client.post<boolean>(this.url + 'prenota/' + email + '/' + evento.id + '/' + partecipanti, null);
     }
}