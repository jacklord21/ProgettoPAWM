import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Evento } from '../evento';
import { IonicAuthService } from '../ionic-auth.service';
import { Prenotazione } from '../prenotazione';
import { PrenotazioneService } from '../prenotazione.service';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.page.html',
  styleUrls: ['./prenotazioni.page.scss'],
})
export class PrenotazioniPage implements OnInit {

  utente: Utente;
  prenotazioni: Array<Prenotazione> = [];

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private utenteService: UtenteService,
    private prenotazioneService: PrenotazioneService,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(
      res => {
        if (res == undefined || res == null)
          this.router.navigateByUrl('login').then(() => { });
        else {
          this.utenteService.login(res.email).subscribe((user: Utente) => {
            this.utente = user;
            this.setPrenotazioni(user);
          })
        }
      }
    )
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
            prezzoTot: eventoAux.prezzo * prenotazione.numPartecipanti
          }
          this.prenotazioni.push(auxPrenotazione);
        })
      })
    })
  }

  getEventi(utente: Utente): Observable<Evento[]> {
    return this.prenotazioneService.getEventiPrenotati(utente);
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

  cancellaPrenotazione(prenotazione: Prenotazione, indice: number) {
    this.alertController.create({
      header: 'Conferma cancellazione',
      message: 'Sei sicuro di voler cancellare la prenotazione per l\'evento: ' + prenotazione.evento.nome,
      buttons: [
        {
          text: 'Annulla',
          handler: () => {
            this.openToast("danger", "Cancellazione prenotazione annullata", 1000);
          }
        },
        {
          text: 'Conferma',
          handler: () => {
            this.prenotazioneService.cancellaPrenotazione(prenotazione);
            this.prenotazioni.splice(indice, 1);
            this.openToast("success", "Cancellazione prenotazione all'evento: "+prenotazione.evento.nome+" effettuata", 1000);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  checkDateBefore(prenotazione: Prenotazione): boolean {
    return moment(prenotazione.evento.data).isBefore(new Date());
  }

  goToStorico() {
    this.router.navigateByUrl('storico');
  }

  goToEditUtente() {
    this.router.navigateByUrl('edit-utente');
  }

  goToEventi(){
    this.router.navigateByUrl('eventi').then(() => window.location.reload());
  }

  goToInformazioni(){
    this.router.navigateByUrl('informazioni');
  }

  private async openToast(colore: string, messaggio: string, durata: number) {
    const toast = await this.toastController.create({
      color: colore,
      message: messaggio,
      duration: durata,
    });
    toast.present();
  }

}
