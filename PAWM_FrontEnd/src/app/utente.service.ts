import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {


  private url!: string;

  constructor(private client: HttpClient) { 
    this.url = 'http://localhost:8080/'
  }

  public registra(utente: Utente) {
    this.client.put<Utente>(this.url + 'registrazione', utente).subscribe();
  }

  public login(email: string){
    return this.client.get<Utente>(this.url + 'login/' + email);
  }

  public aggiornaEmail(utente: Utente){
    console.log("PINO Sè CASCATO: "+utente.id+" AAAA: "+utente.email);
    this.client.put(this.url + 'aggiornaUtente', utente).subscribe();
  }
}
