<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './evento';
import { Utente } from './utente';
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf

@Injectable({
  providedIn: 'root'
})
export class EventoService {
<<<<<<< HEAD
  
}
=======

  private url!: string;

  constructor(private client: HttpClient) { 
    this.url = 'http://localhost:8080/'
  }

  public getDisponibili(): Observable<Evento[]> {
    return this.client.get<Evento[]>(this.url + 'eventi');
  }
}
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
