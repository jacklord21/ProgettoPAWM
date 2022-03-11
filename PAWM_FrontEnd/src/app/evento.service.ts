import { HttpClient } from '@angular/common/http';
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

  public getDisponibili(): Observable<Evento[]> {
    return this.client.get<Evento[]>(this.url + 'eventi');
  }
}