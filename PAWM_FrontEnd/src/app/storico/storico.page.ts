import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Evento } from '../evento';
import { IonicAuthService } from '../ionic-auth.service';
import { Prenotazione } from '../prenotazione';
import { PrenotazioneService } from '../prenotazione.service';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.page.html',
  styleUrls: ['./storico.page.scss'],
})
export class StoricoPage implements OnInit {
  
  private prenotazioni: Array<Prenotazione> = [];

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private utenteService: UtenteService,
    private prenotazioneService: PrenotazioneService
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(user => {
      this.utenteService.login(user.email).subscribe((data: Utente) => {
        this.setPrenotazioni(data);
      })
    })
  }

  setPrenotazioni(utente: Utente) {
    var auxPrenotazione: Prenotazione;
    this.getEventi(utente).subscribe(eventi => {
      eventi.forEach(eventoAux => {
        this.prenotazioneService.getNumPrenotazioni(eventoAux, utente).subscribe(prenotazione => {
          auxPrenotazione = {
            id: prenotazione.id,
            evento: eventoAux,
            numPartecipanti: prenotazione.numPartecipanti,
            data: prenotazione.data,
            prezzoTot: eventoAux.prezzo*prenotazione.numPartecipanti
          }
          this.prenotazioni.push(auxPrenotazione);
        })
      })
    })
  }

  getEventi(utente: Utente): Observable<Evento[]> {
    return this.prenotazioneService.getEventiPrenotati(utente);
  }

  checkDateBefore(prenotazione: Prenotazione): boolean {
    return moment(prenotazione.evento.data).isBefore(new Date());
  }

  goToPrenotazioni(){
    this.router.navigateByUrl('prenotazioni');
  }

  goToEditUtente(){
    this.router.navigateByUrl('edit-utente');
  }

  logOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
