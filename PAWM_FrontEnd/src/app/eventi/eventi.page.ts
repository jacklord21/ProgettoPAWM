import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';
import { IonicAuthService } from '../ionic-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { map } from '@firebase/util';
import { PrenotazioniPage } from '../prenotazioni/prenotazioni.page';
import { Utente } from '../utente';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.page.html',
  styleUrls: ['./eventi.page.scss'],
})
export class EventiPage implements OnInit {

  mappa: Map<Evento, number> 
  clicked: number;
  partecipantiForm: FormGroup

  constructor(
    private eventoService : EventoService, 
    private ionicService : IonicAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private ionicAuthService: IonicAuthService) {
      this.mappa = new Map()
  }

  ngOnInit() {
    
    if(this.ionicService.userDetails()==undefined)
      this.router.navigateByUrl('login')


    this.eventoService.getEventiDisponibili().subscribe(ev => {
      if(ev.length==0) {
        this.openToast('danger', 'Nessun evento disponibile.');
        this.router.navigateByUrl('prenotazioni').then(() => {});
      }
      else {
        this.eventoService.getPostiRimanenti(ev).toPromise().then(ris => {
          for(let i=0; i<ev.length; i++) 
            this.mappa.set(ev[i], ris[i])
        })
      }
    }
    );

    
 //   alert('VALORE PRIMO: ' + this.postiDisponibili[0])


    this.partecipantiForm = this.formBuilder.group({
      numPartecipanti: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ]))
    });
  }

  prenota(evento: Evento, value) {
  //  let u: Utente = this.prenotazioniPage.getUtente()
    alert('PRENOTAZIONE\n\nEvento: ' + evento.nome + '\nNumero partecipanti: ' + value.numPartecipanti)
  //  this.eventoService.prenota(evento, u, value.numPartecipanti)
  }

  async openToast(colore: string, messaggio: string) {  
    const toast = await this.toastController.create({  
      color: colore,
      message: messaggio,   
      duration: 4000  
    });  
    toast.present();  
  } 

  dis(i: number) {
    alert('I: ' + i)
  }

  goToStorico() {
    this.router.navigateByUrl('storico');
  }

  goToPrenotazioni() {
    this.router.navigateByUrl('prenotazioni');
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

  goToEditUtente(){
    this.router.navigateByUrl('edit-utente');
  }

  goToInformazioni(){
    this.router.navigateByUrl('informazioni');
  }
  
}

