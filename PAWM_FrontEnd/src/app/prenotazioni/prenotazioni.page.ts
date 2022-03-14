import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

<<<<<<< HEAD
  private utente: Utente;
  private prenotazioni: Array<Prenotazione> = [];
=======
  utente: Utente;
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private utenteService: UtenteService,
    private prenotazioneService: PrenotazioneService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
<<<<<<< HEAD
    this.ionicAuthService.userDetails().then(user => {
      this.utenteService.login(user.email).subscribe((data: Utente) => {
        this.setUtente(data);
        this.setPrenotazioni(data);
      })
    })
  }

  setUtente(data: Utente) {
    this.utente = {
      id: data.id,
      nome: data.nome,
      cognome: data.cognome,
      dataNascita: data.dataNascita,
      email: data.email
    }
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
=======
    this.ionicAuthService.userDetails().then(
    res => {
      if(res==undefined || res==null)
        this.router.navigateByUrl('login').then(() => {});
      else {
        this.utenteService.login(res.email).subscribe( ris => {this.utente = ris} )
    //    this.visible = true;
      }
    }
  )
    console.log("FIN QUI CE STO");
>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
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
            console.log('Annullato');
          }
        },
        {
          text: 'Conferma',
          handler: () => {
            console.log('Prenotazione: ' + prenotazione.evento.nome + ' cancellata');
            this.prenotazioneService.cancellaPrenotazione(prenotazione);
            this.prenotazioni.splice(indice, 1);
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

  goToEditUtente(){
    this.router.navigateByUrl('edit-utente');
  }

}
