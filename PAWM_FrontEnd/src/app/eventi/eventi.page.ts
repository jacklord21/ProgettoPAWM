import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';
import { IonicAuthService } from '../ionic-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

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
    
    this.ionicAuthService.userDetails().then(
      res => {
        if (res == undefined || res == null)
          this.router.navigateByUrl('login').then(() => { });
      })

    this.eventoService.getEventiDisponibili().subscribe(ev => {
      if(ev.length==0) {
        this.openToast('danger', 'Nessun evento disponibile.', 2000);
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
    this.ionicService.userDetails().then(ris => {
     this.eventoService.prenota(ris.email, evento, value.numPartecipanti).subscribe(ris => {
       if(ris) {
         this.openToast('success', 'Prenotazione effettuata.', 1000)
         this.router.navigateByUrl('prenotazioni').then(() => {})
       }
       else this.openToast('danger', 'La prenotazione non e\' andata a buon fine.', 3000)
     })
    })
   }

  async openToast(colore: string, messaggio: string, durata: number) {  
    const toast = await this.toastController.create({  
      color: colore,
      message: messaggio,   
      duration: durata 
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

